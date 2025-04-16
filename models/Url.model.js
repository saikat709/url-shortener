const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 1,
        unique: true,
        required: true,
    },
    actual: {
        type: String,
    },
});

const Url = mongoose.model("Url", UrlSchema);


module.exports = Url;