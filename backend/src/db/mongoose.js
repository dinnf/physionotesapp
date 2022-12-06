'use strict'
var Mongoose = require('mongoose')
const uri = process.env.PHYSIOAPP_MONGODB_URI ||
"mongodb://localhost:27017/physioApp";
    
    //Connect to MongoDB
    Mongoose.connect(uri, null, function (err) {
    if (err) {
    console.log("DB Error: ", err);
    process.exit(1);
    } else {
    console.log('MongoDB Connected');
    }
    });
    exports.Mongoose = Mongoose;
