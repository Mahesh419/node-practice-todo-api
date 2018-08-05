const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id  = '5b647da00efc731c2a3a9c29';

// if(!ObjectID.isValid(id)){
//   return console.log('Id not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   completed: false
// }).then((todos) => {
//   console.log(todos);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     console.log('Id not found');
//   }else{
//     console.log(todo);
//   }
// }).catch((err) => console.log(JSON.stringify(err)));

User.findById(id).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user));
}).catch((err) => console.log(err));
