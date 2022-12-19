const NoteModel = require("../Models/note");
const jwt = require("jsonwebtoken");


const CreateNote = async (req, res) => {
    
    const {title, description} = req.body;

    const newNote = new NoteModel({
        title : title,
        description : description,
        userId : req.userId
    });

    try{

        await newNote.save();
        res.status(201).json(newNote);

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const UpdateNote = async (req, res) => {

    const id = req.params.id;
    const {title, description} = req.body;

    const newNote = {
        title : title,
        description : description,
        userId : req.userId
    }

    try{

        await NoteModel.findByIdAndUpdate(id, newNote, {new : true});
        res.status(200).json(newNote);

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

const DeleteNote = async (req, res) => {


    const id = req.params.id;
    try{

        const note = await NoteModel.findByIdAndRemove(id);
        res.status(202).json(note);

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});

    }

}

const GetNote = async (req, res) => {

    try{

        const notes = await NoteModel.find({userId: req.userId});
        res.status(200).json(notes);

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});

    }
    
}

module.exports = {
    CreateNote,
    UpdateNote,
    DeleteNote,
    GetNote
}






