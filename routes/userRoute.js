//Route that handles login logic
const express = require('express')
const app = express()

const User = require('../models/user-model');

app.post('/login', (req, res) =>{
    console.log(req.body.name) 
    console.log(req.body.pwd)
    let Users = User.find({'unique_id': `${req.body.name}`}, function(err, data){
        console.log(data)
        if(err){
            res.json({status:"failure"});
        }
        else {
            if(data && data[0]){
                if(data[0].username === `${req.body.name}` && data[0].password === `${req.body.pwd}`){
                    res.json({status:"success", unique_id:`${req.body.name}`});
                }else{
                    res.json({status:"failure"});
                }
            }else{
                res.json({status:"failure"});
            }
        }
    }); 

})

module.exports = app;