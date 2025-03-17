const reviewsController = {};
import reviewsModel from "../models/reviewsMdl.js"

// SELECT
reviewsController.getReviews = async (req, res) => {
    const reviews = await reviewsModel.find().populate("idClient")
    res.json(reviews)
}

// INSERT
reviewsController.insertReviews = async (req, res) => {
    const { comment, rating, idClient } = req.body;
    const newReview = new reviewsModel ({ comment, rating, idClient })
    await newReview.save()
    res.json({message: "Review saved"})
}

// DELETE
reviewsController.deleteReviews = async (req, res) => {
    await reviewsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Review deleted"})
}

// UPDATE
reviewsController.updateReviews = async (req, res) => {
    const { comment, rating, idClient } = req.body;
    const updateReview = await reviewsModel.findByIdAndUpdate(req.params.id, { comment, rating, idClient }, {new: true});
    res.json({message: "Review update succesfully"})
} 

export default reviewsController;