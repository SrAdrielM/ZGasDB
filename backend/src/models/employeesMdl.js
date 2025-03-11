/*
name
lastName
birthday (esto es de tipo Date o lo puden poner como String)
email
address
hireDate (esto es de tipo Date o lo puden poner como String)
password
telephone
dui
isssNumber
isVerified (esto es booleano)
*/

import {Schema, model} from "mongoose";

const employeesSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    birthday: {
        type: Date,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    hireDate: {
        type: Date,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    telephone: {
        type: String
    },
    dui: {
        type: String,
        require: true
    },
    isssNumber: {
        type: String,
        require: true
    },
    isVerfied: {
        type: Boolean,
        require: true
    }

}, {
    timestamps: true,
    strict: false
})

export default model("employees", employeesSchema);