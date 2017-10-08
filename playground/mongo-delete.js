// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/ToDos', (err, db) => {
    if(err) {
        return console.log("Unable to Connect to MongoDB server", err);
    }

    // console.log('Connected to MongoDB');
    //  db.collection('Users').deleteMany({name: "Abbas"}).then((result) => {
    //      console.log(result);
    //  });

    db.collection('Users').findOneAndDelete({_id : new ObjectID('59da3af5a5bf49fa11267d2a')}).then((result) => {
        console.log(result);
     });
    //close the connection
    //db.close();
});