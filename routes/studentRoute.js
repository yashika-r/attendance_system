const express = require('express')
const app = express()
const Student = require('../models/fetch-model');

app.get('/fetch-student', function (req, res) {
    let Students = Student.find({}, function(err, response){
        if(err){
            console.log(err);
        }
        else {
            res.json(response);
        }
    });
});

module.exports = app;
