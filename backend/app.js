//importo todo lo de la libreria express
import express from "express";

import productsRoutes from "./src/routes/products.js"
import clientsRouter from "./src/routes/clients.js"


//creo una constante que es igual a la libreria que acabo de importar
const app = express();

app.use(express.json());

app.use("/api/products", productsRoutes);
app.use("/api/clients", clientsRouter);


//exporto esta constante para usar express en todo lados
export default app;
