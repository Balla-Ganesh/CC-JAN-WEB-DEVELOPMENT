const mongoose = require('mongoose');
const admin = require("../models/adminLogin");
const Question = require("../models/questions");

const score = 0;

exports.adminPage = (req, res) => {
    res.render('admin', { title: "Admin Page" });
}

exports.adminPost = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const x = new admin({
            email: email,
            password: password
        });
        const entry = await admin.findOne({ email });
        if (entry) {
            res.render('questions', { title: "Add new Questions", entry });
        }
        else {
            res.render('index', { title: "Login Failed" });
        }
    } catch (err) {
        ~
            console.error(err);
        res.status(500).send('Error occurred while finding duplicates');
    }
}

exports.questionsPost = async (req, res, next) => {
    try {
        const { question, option1, option2, option3, option4, correct } = req.body;
        const x = new Question({
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            correct: correct
        });
        console.log(question);
        console.log(option1);
        console.log(option2);
        console.log(option3);
        console.log(option4);
        console.log(correct);
        await x.save();
        res.render('questions', { title: "Add new Questions" });
    } catch (err) {
        ~
            console.error(err);
        res.status(500).send('Error occurred while finding duplicates');
    }
}

exports.quizPage = async (req, res, next) => {
    try {
        const allquestions = await Question.find();
        res.render('quiz', { title: "Take the Quizz", allquestions });
    } catch (err) {
        ~
            console.error(err);
        res.status(500).send('Error occurred while finding duplicates');
    }
}
