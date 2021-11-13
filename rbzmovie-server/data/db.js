const mongoose = require('mongoose');
require('./users.model');
const uri = "mongodb+srv://RBZmovieapp:rbz123456@cluster0.zwgvd.mongodb.net/rbzmovieapp?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", function(){
    console.log("Mongoose connected ...");
});
mongoose.connection.on("disconnected", function(){
    console.log("Mongoose disconneted");
});