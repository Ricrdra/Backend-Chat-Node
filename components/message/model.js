const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mySchema = new Schema({
    user: {
        type: String,
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