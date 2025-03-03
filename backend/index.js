//importo el achivo app.js
import app from "./app.js"

//importamos el archivo database
import "./database.js"

//importo el archvivo ocnfig
import {config} from "./src/config.js"

//creo una funcion que ejecute el servidor
async function main() {
    app.listen(config.MONGO_URI);
    console.log("Server running");
}

//ejecuto la funcion
main();