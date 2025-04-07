import jsonwebtoken from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import crypto from "crypto";

import clientsMdl from "../models/clientsMdl.js";
import {config} from "../config.js"


const registerClientsController = {};

registerClientsController.register = async (req, res) => {
    const {name, lastName, birthday, email, password, telephone, dui, isVerified} = req.body;
    try {
        //Verificamos si el cliente ya existe
        const existingClient = await clientsMdl.findOne({email})
        if(existingClient){
            return res.json({message: "Client already exist"})
        }

        //Encriptacion de contraseña
        const passwordHash = await bcryptjs.hash(password, 10);

        //Guardamos el cliente en la base de datos
        const newCliente = new clientsMdl({
            name, 
            lastName,  
            birthday, 
            email, 
            password: passwordHash, 
            telephone, 
            dui: dui || null,
            isVerified: isVerified || null
        });

        await newCliente.save();

        const verificationCode = crypto.randomBytes(3).toString("hex")

        const tokenCode = jsonwebtoken.sign(
            {email, verificationCode},
            config.JWT.secret,
            {expiresIn: "2h"}
        )

        res.cookie("verificationToken", tokenCode, {maxAge: 2*60*60*1000})

        //Enviar el correo electronico
        //1- transporte, o quien lo envia
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.email.email_user,
                pass: config.email.email_pass
            }
        })

        //2- mailoptions => quien lo recibe
        const mailOptions = {
            from: config.email.email_user,
            to: email,
            subject: "Verificacion de correo",
            text: "Para verificar tu cuenta, utiliza el siguiente codigo " + verificationCode + " que expira eh 2 horas."
        };

        //3- Enviar el correo
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                return res.json({message: "Error sendind email " + error})
            }
            console.log("Email sent" + info);
        }); 

        res.json({message: "Client registered, please verify your email with the sent code"})

    } catch (error) {
        console.log("error: "+ error)
    }
};

registerClientsController.verificationCodeEmail = async (req, res) => {
    const {requireCode} = req.body;
    const token = req.cookies.verificationToken;

    try {
        const decoded = jsonwebtoken.verify(token, config.JWT.secret)
        const {email, verificationCode: storedCode} = decoded;

        if(requireCode !== storedCode){
            return res.json({message: "Invalid code"})
        }

        const client = await clientsModel.findOne({email});
        client.isVerified = true;
        await client.save();

        res.clearCookie("verificationToken");
        res.json({message: "Email verified succesfuly"});

    } catch (error) {
        console.log("error" + error)
    }
}

export default registerClientsController;