let mongoose=require('mongoose');
let db = require('../database');
// create an schema
let attendancedetailsSchema =  mongoose.Schema({
            name:String,
            unique_id:String,
            attendance_details:String
        });
        attendanceTable=mongoose.model('attendancedetails',attendancedetailsSchema);
let Attendance= module.exports= attendanceTable;
