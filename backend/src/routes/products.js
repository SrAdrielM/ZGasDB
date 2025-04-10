/*este archivo sirve para definir que metodos del CRUD va a tener mi ruta*/

import express from "express";
import productsController from "../controllers/productsCtrl.js";

const router = express.Router();

router.route("/")
.get(productsController.getProducts)
.post(productsController.insertProducts);

router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProducts);

export default router;