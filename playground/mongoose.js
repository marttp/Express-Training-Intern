const mongoose = require('mongoose');
const validator = require('validator');
const url = 'mongodb://localhost:27017';
const dbName = 'MyDb';

mongoose.connect(`${url}/${dbName}`,{ useNewUrlParser: true });
// mongoose.connect(`${url}/${dbName}`);

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message:'{VALUE} is not email'
        },
        unique: true
    },
    password:{
        type: String,
        require: true,
        minlength: 1
    }
})

// 'User' affect to collection in Database
const User = mongoose.model('User',UserSchema);

const user1 = new User({
    username: 'mart@testmail.com',
    password: '123456789'
})

// user1.save().then((savedUser) => {
//     console.log(user1);
//     console.log(savedUser);
// }).catch((err) => {
//     console.log(err);
// });

// User.findOneAndUpdate(
//     {username: 'kokoha'}, //condition
//     { $set:{ username: 'kokohat' }},  // update Obj by set
//     {new:true}) //request new value in MongoDB
//     .then((savedUser=>{
//         console.log(savedUser);
//     }))
//     .catch(err => {
//         console.log(err);
// })

User.findOneAndRemove(
    {username: 'kokoha'}, //condition
    ).then((savedUser=>{
        console.log(savedUser);
    }))
    .catch(err => {
        console.log(err);
})