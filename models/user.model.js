const mongoose = require('mongoose');


//In databases, a schema defines the structure /shape of your data
//schema  is like a blueprint for your database document.
//schema is used to .....
    //*To enforce structure in the mongoDB documents
    //To validate data before saving
    //To define relationships(e.g, user has many posts)
    //To add methods & middleware to database models
let customerSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, 
    unique: [true, "Email has been taken, please choose another one"]}
})
module.exports = mongoose.model("customer", customerSchema);