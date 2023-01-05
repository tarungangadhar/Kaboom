const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const User = require('../models/users');



router.post('/signup', (req, res) => {
    console.log(req)
    const userdata = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }
    
    console.log(userdata)

    const user = new User(userdata);
    user.save()
        .then((ack)=> {
           res.json(ack);
        })
        .catch(err => res.json(err))
});

module.exports = router;