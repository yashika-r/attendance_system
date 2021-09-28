let mongoose=require('mongoose');
let db = require('../database');

// create an schema
let loginSchema =  mongoose.Schema({
            username: String,
            password:String,
            unique_id:String,
        });
        loginTable=mongoose.model('useraccounts',loginSchema);
let User= module.exports= loginTable;
