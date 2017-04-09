const express = require('express');
const router = express.Router();
const User = require("../models/user");
const passport = require('passport');
const jwt = require('jsonwebtoken');

//Register
router.post('/register', (req,res, next) => {
    console.log('Register');
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    console.log(newUser);
    User.addUser(newUser, (err, user)=>{
        if(err){
            res.json({success: false, msg:"Failed to register User"});
        }else {
            res.json({success: true, msg:"User register successfull"});
        }
    })
});

//Authenticate
router.post('/authenticate', (req,res, next) => {
    res.send('Authenticate');
});

//Profile
router.get('/profile', (req,res, next) => {
    res.send('REGISTER');
});

module.exports = router;
