const Student = require('../models/fetch-models');

router.get('/student', function (req, res) {
    let Students = Student.find({}, function(err, res){
        if(err){
            console.log(err);
        }
        else {
            res.json(res);
        }
    });
});