const mongoose = require('mongoose');

//mongoose support callbacks by default
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

mongoose.Promise = global.Promise;
//mongoose wait for the connectiong before doing anything

module.export = {mongoose};
