const customerModel = require("../models/user.model");

exports.getSignup = (req, res) => {
    res.render('index');
}

exports.postRegister = (req, res) => {
    console.log(req.body);
    // allUsers.push();
    // res.send('confirmed');
    let newCustomer = new customerModel(req.body);
    newCustomer.save()
    .then(() => {
        //res.send("Registration successful !")
        res.redirect("/dashboard")
    })
    .catch((err) => {
        console.error("Error registering customer: ", err);
        //res.status(500). send("Internal server error");
    })
}

exports.getSignIn = (req, res) => {
    res.render('signin.ejs');
}

exports.postLogin = (req, res) => {
    res.send("confirmed again");
}

exports.getDashboard = (req, res) => {
    customerModel.find()
    .then((data) =>{
        console.log(data);
        allCustomers = data;
        res.render('dashboard', {allCustomers})
    })
    .catch((err) => {
        console.error("Error fetching customers:", err);
        res.status(500).send("Internal server error");
    })
}