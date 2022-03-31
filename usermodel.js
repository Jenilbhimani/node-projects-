const mongoose = require("mongoose");
const userSchama = new mongoose.Schema({
    "_id":{type : Number, required: true},
    "name": { type: String, required: true },
    "password": { type: Number, required: true },
    "isAdmin": { type: Boolean, required: true },
    "email": { type: String, required: true }
}, { timestamps: true });

const user = mongoose.model("user", userSchama);
module.exports = user;