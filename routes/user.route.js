const express = require('express');
const {getSignup, postRegister, getSignIn, postLogin, getDashboard} = require("../controllers/user.controller");
const router = express.Router();

router.get("/signup", getSignup);

router.post("/register", postRegister);

router.get("/signin", getSignIn);

router.post("/login",postLogin );

app.get("/dashboard", getDashboard);

module.exports = router