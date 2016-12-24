const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var id = '585eac7d1b85861f1485f33ee';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
};

//no need to pass new ObjectID, mongoose will let you pass in a string as the id and convert it

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));


User.findById('585c47e965b9421a18f39130').then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
