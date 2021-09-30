const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true

    },
    chat: {
        type: Schema.ObjectId,
        ref: "Chat",
        required: true,
    }, file: {
        type: String,
        required: false
    },
    date: String
});


const Model = mongoose.model('Message', mySchema);
module.exports = Model;