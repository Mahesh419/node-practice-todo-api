//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


let obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) =>{
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

 // db.collection('Users').insertOne({
 //   name: 'Mahesh',
 //   age: 23,
 //   location: 'Sri Lanka'
 // }, (err, res) => {
 //   if(err){
 //     return console.log('unable to add the user', err);
 //   }
 //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
 // });


  db.close();
});
