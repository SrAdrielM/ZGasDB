//importo el achivo app.js
import app from "./app.js"

//importamos el archivo database
import "./database.js"

//importo el archvivo ocnfig
import {config} from "./src/config.js"

//creo una funcion que ejecute el servidor
async function main() {
    app.listen(config.server.port);
    console.log("Server on port " + config.server.port);
}

//ejecuto la funcion
main();