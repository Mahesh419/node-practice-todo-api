const mongoose = require('mongoose');

//mongoose support callbacks by default
mongoose.connect('mongodb://localhost:27017/ToDoApp', {useNewUrlParser: true});

mongoose.Promise = global.Promise;
//mongoose wait for the connectiong before doing anything

module.export = {mongoose};
