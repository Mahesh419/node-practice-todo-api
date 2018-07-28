//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


let obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // });

  // //deleteOne
  // db.collection('Users').deleteOne({name: 'Mahesh'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: 123}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
