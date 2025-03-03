//importar la libreria mongoose
import mongoose from "mongoose";

//importo mi archivo config con todas las variables
import {config} from "./src/config.js"

//1 - guardo en una constante la url de mi base de datos

const uri = "mongodb://localhost:27017/ZGasDB";

//2 - conecto a las base de datos
mongoose.connect(config.MONGO_URI);

//comprobar la conexion
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB is connected :D");
})

connection.once("disconnected", () => {
    console.log("DB is disconnected");
})

connection.once("error", () => {
    console.log("error found" + error );
})
