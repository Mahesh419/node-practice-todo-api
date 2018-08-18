require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');

var app = express();

//creating the port to run this app on heroku
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then ((todos) => {
    res.send({
      todos});
  }, (err) => {
      res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }

  Todo.findById(req.params.id).then((todo) => {
    if(!todo){
      res.status(404).send();
    }
    res.send({todo});
  }).catch((err) => res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
   let id = req.params.id;
   //validating id
   if(!ObjectID.isValid(id)){
     res.status(404).send();
   }
   //removing todo item
   Todo.findByIdAndRemove(id).then((todo) => {
     if(!todo){
       res.status(404).send();
     }
     res.status(200).send({todo});
   }).catch((err) => {
     res.status(400).send();
   });
});

app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  //validating id
  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo){
      res.status(404).send();
    }
    res.status(200).send(todo);
  }).catch((err) => {
    res.status(400).send();
  });

});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
