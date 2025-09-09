const express = require('express');
const app = express();
exports.app = app;
const ejs = require('ejs');
const mongoose = require('mongoose');
const customerRouter = require("./routes/user.route")
const URI = process.env.URI
const PORT = process.env.PORT || 5185;


app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

mongoose.connect(URI)
.then(() => {
    console.log("MongoDB  connected successfully");
})
.catch((err) => {
    console.log("MongoDB connection error", err);
    console.log(err);
})

// Schema  = structure and rules of your mongoDB document

//model = actual object you use to interact with MongoDB(built from schema)
// let customerModel = mongoose.model("customer", customerSchema);

app.get("/", (req, res) => {
    res.send('Hello World');
})

let allCustomers = [];






app.use("/user", customerRouter)

app.listen(PORT, (err) => {
    if(err)
    {
        console.log("The application could not start ");
    }
    else
    {
        console.log(`My application has started running on http://localhost:${port}`);
    }
})