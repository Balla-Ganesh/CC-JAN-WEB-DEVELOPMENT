const mongoose= require('mongoose');

const notesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
        trim: true
    },
    description: {
        type: String,
        required: "Description is required",
        trim: true
    }
});

module.exports = mongoose.model('Notes',notesSchema);