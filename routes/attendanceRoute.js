const express = require('express')
const app = express()
const Attendance = require('../models/attendance-model');

app.get('/fetch-attendance', function (req, res) {
    console.log(req.query);
    let userId = req.query.userId;
    let AttendanceList = Attendance.find({'unique_id':userId}, function(err, response){
        console.log(response)
        if(err){
            console.log(err);
        }
        else {
            res.json(response);
        }
    });
});

module.exports = app;
