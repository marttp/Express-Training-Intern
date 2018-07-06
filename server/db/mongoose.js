const mongoose = require('mongoose');
// const validator = require('validator');
const url = 'mongodb://localhost:27017';
const dbName = 'MyDb';

mongoose.connect(`${url}/${dbName}`,{ 
    useNewUrlParser: true 
});

