//importo todo lo de la libreria express
import express from "express";
import cookieParser from "cookie-parser";

import productsRoutes from "./src/routes/products.js"
import clientsRouter from "./src/routes/clients.js"
import employeesRouter from "./src/routes/employees.js"
import branchesRouter from "./src/routes/branches.js"
import reviewsRouter from "./src/routes/reviews.js";
import evaluationsRouter from "./src/routes/evaluations.js"
import registerEmployeesRouter from "./src/routes/registerEmployees.js";
import loginRoute from "./src/routes/login.js"
import logoutRouter from "./src/routes/logout.js"


//creo una constante que es igual a la libreria que acabo de importar
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productsRoutes);
app.use("/api/clients", clientsRouter);
app.use("/api/employees", employeesRouter);
app.use("/api/branches", branchesRouter);
app.use("/api/reviews", reviewsRouter)
app.use("/api/evaluations", evaluationsRouter);

app.use("/api/registerEmployees", registerEmployeesRouter);
app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRouter);
app.use("/api/registerClients")


//exporto esta constante para usar express en todo lados
export default app;
