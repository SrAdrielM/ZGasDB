//importar la libreria mongoose
import mongoose from "mongoose";
import {config} from "./src/config.js"

//2 - conecto a las base de datos
mongoose.connect(config.db.URI);

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
