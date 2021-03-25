const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    commentText: {
        type: String,
        required: true
    },
    uploadedPhoto: String,
    createdAt: {
        type: Date,
        //FIXME: check if it the correct format
        default: Date.now
    }
});

const Comment = mongoose.model("commet", commentSchema);
module.exports = comment;