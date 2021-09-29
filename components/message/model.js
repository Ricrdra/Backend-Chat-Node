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
    date: String
});


const Model = mongoose.model('Message', mySchema);

module.exports = Model;