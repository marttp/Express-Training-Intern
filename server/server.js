const express = require('express');
const bodyParser = require('body-parser');
//import initialize Database
require('./db/mongoose')

const { Note } = require('./models/note');

const app = express();

app.use(bodyParser.json());

// app.get('/notes') return all notes
app.get('/notes',(req,res) => {
    Note.find().exec()
        .then((notes) => {
            if(!notes){
                res.status(400).send();
            }
            // const allNotes = notes.map((item)=>{
            //     return {
            //         _id: item._id,
            //         title: item.title,
            //         content: item.content,
            //         completed: item.completed,
            //         completedAt: item.completedAt
            //     }
            // })
            res.status(200).json(notes);
        })
        .catch((err)=>{
            res.status(400).json({
                error:err
        })
    })
})

app.get('/notes/:id',(req,res) => {
    Note.findById(req.params.id).exec()
        .then((notes) => {
            if(!notes){
                res.status(400).send();
            }
            // const allNotes = notes.map((item)=>{
            //     return {
            //         _id: item._id,
            //         title: item.title,
            //         content: item.content,
            //         completed: item.completed,
            //         completedAt: item.completedAt
            //     }
            // })
            res.status(200).json(notes);
        })
        .catch((err)=>{
            res.status(400).json({
                error:err
        })
    })
})


// create note
app.post('/notes',(req,res) => {
    // const body = req.body;
    const note = new Note({
        title: req.body.title,
        content: req.body.content,
        // completed: req.body.completed,
        // completedAt: req.body.completedAt
    });

    note.save()
    .then((result) => {
        res.status(201).json({
            result
        })
        // res.send(result);
    }).catch((err) => {
        res.status(400).json({
            error: err
        })
    });
})

// app.patch('/notes/:id') return update note
app.patch('/notes/:id',(req,res)=>{

    if(req.body.completed) {
        req.body.completedAt = new Date().getTime();
    } else {
        req.body.completedAt = null;
    }

    Note.findByIdAndUpdate(req.params.id,
        { $set: req.body },
        { new:true}
    )
    .then((updatedNote) =>{
        res.status(201).json({
            updatedNote
        })
    })
    .catch((err) => {
        res.status(400).json({
            error: err
        })
    })
})
// app.delete('/notes/:id') return deleted note

app.delete('/notes/:id',(req,res)=>{
    Note.findByIdAndRemove(req.params.id)
    .then((deletedNote) =>{
        if(!deletedNote){
            return res.status(404).send();
        }
        res.status(200).json({
            deletedNote:{
                deletedNote
            }
        })
    })
    .catch((err) => {
        res.status(400).json({
            error: err
        })
    })
})

app.delete('/notes/:title',(req,res)=>{
    Note.findOneAndRemove(req.params.title)
    .then((deletedNote) =>{
        if(!deletedNote){
            return res.status(404).send();
        }
        res.status(200).json({
            deletedNote:{
                deletedNote
            }
        })
    })
    .catch((err) => {
        res.status(400).json({
            error: err
        })
    })
})


app.listen(50000,()=> 
    console.log('Example app listening on port '+50000)
);

module.exports = app;