const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: "Required Filed",
        trim: true
    },
    option1: {
        type: String,
        required: "Required Filed",
        trim: true
    },
    option2: {
        type: String,
        required: "Required Filed",
        trim: true
    },
    option3: {
        type: String,
        required: "Required Filed",
        trim: true
    },
    option4: {
        type: String,
        required: "Required Filed",
        trim: true
    },
    correct: {
        type: String,
        required: "Required Filed",
        trim: true
    }
});

module.exports = mongoose.model('Questions',questionSchema);
