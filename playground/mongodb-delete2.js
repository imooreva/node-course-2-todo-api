const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    db.collection('Users').deleteMany({name: 'Ian'}).then((result) => {
       console.log(result); 
    });
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID('585a87db599d422b4ca1bf8d')}).then((result) => {
        console.log(result);
    });
});