// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/ToDos', (err, db) => {
    if(err) {
        return console.log("Unable to Connect to MongoDB server", err);
    }

    console.log('Connected to MongoDB');

    // db.collection('Todos').find({completed: true}).toArray().then((docs)  => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //         }, (err) => {
    //             console.log ("Unable to Print Docs");
    //         });

    db.collection('Users').find({name: "Abbas"}).count().then((count) => {
        console.log(`Users named Abbas : ${count}`);
    }, (err) => {
        return console.log("Couldn't find Users");
    })
    //close the connection
    //db.close();
});