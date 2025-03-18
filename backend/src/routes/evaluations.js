import express from "express";

const router = express.Router();

import evaluationsController from "../controllers/EvaluationsCtrl.js";

router.route("/")
.get(evaluationsController.getEvaluations)
.post(evaluationsController.insertEvaluations);

router.route("/:id")
.put(evaluationsController.updateEvaluations)
.delete(evaluationsController.deleteEvaluations);

export default router;