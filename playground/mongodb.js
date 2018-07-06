const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

//Database you wanna connect
const dbName = 'user';

MongoClient.connect(url, (err, client) => {
    //If connection error / return log
    if(!client){
        return console.log('Couldn\'t connect to MongoDB');
    }

    //Database client wanna connect
    const db = client.db(dbName);
    //Collection you wanna manage only
    const usersCollection = db.collection('users');

    /*
        Manage Data
    */
   //Insert
    // usersCollection.insert({
    //     name: 'Mike',
    //     age: 19,
    //     telephone: 0815215639
    // })

    usersCollection.find({name: 'Mart'}).toArray().then(user => {
        //find timestamp from _id
        //Can check in document for use object _id
        console.log(user[0]._id.getTimestamp());
    });


    console.log('Connect to MongoDB');
    client.close();
})