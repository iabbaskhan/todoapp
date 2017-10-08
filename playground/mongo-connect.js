// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/ToDos', (err, db) => {
    if(err) {
        return console.log("Unable to Connect to MongoDB server", err);
    }

    console.log('Connected to MongoDB');
    // db.collection('Todos').insertOne({
    //     text: 'Some text . .. .',
    //     completed: false
    // }, (err, res) => {
    //     if(err){
    //         return console.log("Unable to add ToDo", err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));

    // });

    // db.collection('Users').insertOne({
    //     name: 'Abbas',
    //     age: 25,
    //     location: 'Islamabad'
    // }, (err, res) => {
    //     if(err) {
    //         return console.log("Unable to add User", err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 5));
    // });


    //close the connection
    //db.close();
});