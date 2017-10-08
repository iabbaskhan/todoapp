// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/ToDos', (err, db) => {
    if(err) {
        return console.log("Unable to Connect to MongoDB server", err);
    }

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('59da366fa5bf49fa11267c75')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({name: "Saeed"},
    {
        $set: {
            name: "Abbas"
        },
        $inc: {
            age: 1
        }   
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    //close the connection
    //db.close();
});