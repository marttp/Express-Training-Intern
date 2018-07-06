const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const users = [
    {
        id: 1,
        name: 'Mart',
        age: 21
    },
    {
        id: 2,
        name: 'Tarm',
        age: 25
    },
    {
        id: 3,
        name: 'Ramt',
        age: 19
    }
];


const simpleMiddleware = (req, res, next) => {
    console.log('Middleware');
    next();
}

app.use(simpleMiddleware);

app.get('/', (req,res)=>{
    res.send('Hello World - GET');
})
app.get('/users', (req,res)=>{
    // res.send('user - GET '+req.params.id);
    res.status(200).json({
        users
    })
})

app.get('/users/:id', (req,res)=>{
    // res.send('user - GET '+req.params.id);
    const user = users.filter(item => {
        return req.params.id == item.id;
    });
    if(user){
        res.status(200).send(user);
    } else {
        res.status(404).send();
    }
})


app.post('/',(req,res)=>{
    res.send('Hello World - POST');
})

// app.post('/users',simpleMiddleware, (req,res)=>{
//     // res.send('user - GET '+req.params.id);
//     const user = req.body;
//     res.status(201).send(user);
// })

app.patch('/', (req,res)=>{
    res.send('Hello World - PATCH');
})
app.delete('/', (req,res)=>{
    res.send('Hello World - DELETE');
})

app.listen(50000,()=> console.log('Example app listening on port '+50000));

module.exports = app;