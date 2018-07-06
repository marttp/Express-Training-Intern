const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    completed : {
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
})

const Note = mongoose.model('Note',NoteSchema);

module.exports = {
    Note
}