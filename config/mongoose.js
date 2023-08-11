const mongoose = require('mongoose');

// connect with db
mongoose.connect('mongodb://localhost/codeial_development');

// db access the database connection
const db = mongoose.connection;

// if any error occur while connecting to database
db.on('error', console.error.bind("Error in connecting to database"));

// if database has been connected successfully
db.once('open', function(){
    console.log("Successfully connected to the database.");
});