var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
       text: req.body.text 
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        //httpstatuses.com
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});


//Allows for dynamic url, such as GET /todos/1234
//creates id variable, found on the request object
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    //checks for valid ID
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    
    //if ID is valid but not found, then 404 is sent
    //if ID is valid and found, then object is sent
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
})

module.exports = {app};
