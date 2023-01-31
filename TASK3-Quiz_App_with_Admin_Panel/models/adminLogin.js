const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "Email is required",
        trim: true
    },
    password: {
        type: String,
        required: "Password is required",
        trim: true
    }
});

module.exports = mongoose.model('Admin',adminSchema);
