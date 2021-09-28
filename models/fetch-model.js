let mongoose=require('mongoose');
let db = require('../database');
// create an schema
let studentsSchema =  mongoose.Schema({
            name: String,
            unique_id:String,
           department:String,
        });
userTable=mongoose.model('students',studentsSchema);
let Student= module.exports= userTable;
