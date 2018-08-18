const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove

Todo.findByIdAndRemove('5b77ca8d84bed5587486e85b').then((todo) => {
    console.log(todo);
});
