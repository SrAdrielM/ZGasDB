const evaluationsController = {};
import evaluationsModel from "../models/evaluationsMdl.js"

// SELECT
evaluationsController.getEvaluations = async (req, res) => {
    const evaluations = await evaluationsModel.find().populate("idEmployee")
    res.json(evaluations)
}

// INSERT
evaluationsController.insertEvaluations = async (req, res) => {
    const { comment, grade, role, idEmployee } = req.body;
    const newEvaluation = new evaluationsModel ({ comment, grade, role, idEmployee })
    await newEvaluation.save()
    res.json({message: "Evaluation saved"})
}

// DELETE
evaluationsController.deleteEvaluations = async (req, res) => {
    await evaluationsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Evaluation deleted"})
}

// UPDATE
evaluationsController.updateEvaluations = async (req, res) => {
    const { comment, grade, role, idEmployee } = req.body;
    const updateEvaluation = await evaluationsModel.findByIdAndUpdate(req.params.id, { comment, grade, role, idEmployee }, {new: true});
    res.json({message: "Evaluation update succesfully"})
} 

export default evaluationsController;