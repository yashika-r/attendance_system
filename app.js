const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000
const studentRoute = require("./routes/studentRoute");
const userRoute = require("./routes/userRoute");

// We are using our packages here
app.use(bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())

app.use("/", studentRoute);
app.use("/", userRoute);


//Start your server on a specified port
app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})
