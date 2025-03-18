/*
Comment
Grade
Role
idEmployee
 */

import {Schema, model} from "mongoose";

const evaluationsSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    grade: {
        type: Number,
        require: true,
        min: 0,
        max: 10
    },
    role: {
        type: String,
        require: true
    },
    idEmployee: {
        type: Schema.Types.ObjectId,
        require: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("evaluations", evaluationsSchema);