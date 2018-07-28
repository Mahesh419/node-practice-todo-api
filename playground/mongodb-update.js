//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


let obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate(
  //   {_id: new ObjectID("5b5cd83d3775f284409cf12e")}
  //   ,{$set: {
  //     completed: true
  //   }}, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(JSON.stringify(result, undefined, 2));
  //   });

  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID("5b5b26b1ea918157e15a1560")},
    {$set: {
      name: 'Dilhan'
    },
      $inc: {
        age : 1
      }

  },{
    returnOriginal: false,
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
