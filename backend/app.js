//importo todo lo de la libreria express
import express from "express";
import productsRoutes from "./src/routes/products.js"

//creo una constante que es igual a la libreria que acabo de importar
const app = express();

app.use(express.json());

app.use("/api/products", productsRoutes);


//exporto esta constante para usar express en todo lados
export default app;
