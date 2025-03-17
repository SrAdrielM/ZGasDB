/*
Fields:
    comment
    rating
    idCliente
*/

import {Schema, model} from "mongoose";

const reviewSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5
    },
    idClient: {
        type: Schema.Types.ObjectId,
        ref: "clients",
        require: true,
    }
}, {
    timestamps: true,
    strict: false
})

export default model("reviews", reviewSchema);