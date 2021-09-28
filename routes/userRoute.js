//Route that handles login logic
const express = require('express')
const app = express()

const User = require('../models/user-models');

app.post('/login', (req, res) =>{
    console.log(req.body.username) 
    console.log(req.body.password)
    let Users = User.find({unique_id: `${req.body.username}`}, function(err, res){
        if(err){
            res.json({status:"failure"});
        }
        else {
            if(res && res[0]){
                if(res[0].username === `${req.body.username}` && res[0].password === `${req.body.password}`){
                    res.json({status:"success", unique_id:`${req.body.username}`});
                }else{
                    res.json({status:"failure"});
                }
            }else{
                res.json({status:"failure"});
            }
        }
    }); 

})
