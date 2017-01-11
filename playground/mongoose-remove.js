const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');


//Removes all
//
//Todo.remove({}).then((result) => {
//    console.log(result);
//});

//Other methods of removal
//Todo.findOneAndRemove
//Todo.findByIdAndRemove


//Both methods are same, but use the first one if you want to query more than one field
//Todo.findByIdAndRemove({ _id: '58758d8a41a2a20491771f50' }).then((todo) => {
//    console.log(todo)
//});

Todo.findByIdAndRemove('58758d8a41a2a20491771f50').then((todo) => {
    console.log(todo)
});