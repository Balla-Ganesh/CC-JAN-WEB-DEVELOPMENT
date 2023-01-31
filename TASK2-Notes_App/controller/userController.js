const mongoose = require('mongoose');
const { findOne } = require('../model/notes');
const notes = require('../model/notes');


exports.homePage = async (req,res) => {
    const allNotes = await notes.find();
    res.render('index',{title: "Notes Application",allNotes,req: req});
}

exports.newNotes = async (req,res) => {
    const allNotes = await notes.find();
    res.render('index',{title: "Notes Application",allNotes,req: req});
}

exports.newNotesPost = async (req,res,next) => {
    try {
        const { name, description } = req.body;
        const newNotes = new notes({
            name: name,
            description: description
        });
        const entry = await notes.findOne({name});
        if(entry){
            console.log("Error");
            res.status(500).send('Notes with same name already exists');
        }
        else{
            try {
                await newNotes.save();
            } catch (err) {
                console.error(err);
                res.status(500).send('Error occurred while saving the user to the database');
            }
            next();
        }
    } catch (err) {~
        console.error(err);
        res.status(500).send('Error occurred while finding duplicates');
    }
}

exports.getNotes = async (req,res,next) => {
    try{
        const allNotes = await notes.find();
        res.render('index',{allNotes,req: req});
    }
    catch(error){
        next(error);
    }
}

exports.deleteGet = async (req,res) => {
    const noteNames = req.params.noteName;
    const note = await notes.find({name: {noteNames}});
    req.json(note);
}

exports.getDetails = async (req,res) => {
    const noteNames = req.params.noteName;
    const notesData = await notes.find({name:noteNames});
    const [{name,description}] = notesData;
    res.render('viewnotes',{title: `${noteNames}`,name,description,req: req});
}

exports.editNotes = async (req,res) => {
    console.log('editNotes');
    const noteNames = req.params.notes;
    const notesData = await notes.find({name:noteNames});
    const [{name,description}] = notesData;
    res.render('update',{title: `${noteNames}`,name,description,req: req});
}

exports.updateGet = (req,res) => {
    res.render('update');
}

exports.updateNotes = async (req,res) => {
    const {name,description } = req.body;
    await notes.deleteOne({name:name});
    const newNotes = new notes({
        name: name,
        description: description
    });
    await newNotes.save();
    const allNotes = await notes.find();
    res.render('index',{allNotes,req: req});
}

exports.deleteNotes = async (req,res) => {
    const name=req.params.notes;
    await notes.deleteOne({name:name});
    const allNotes = await notes.find();
    res.render('index',{allNotes,req: req});
}