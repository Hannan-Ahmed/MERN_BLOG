const connecttomongo = require('./dbconnect');
const express = require('express')
var https = require('https');
const fs = require("fs");
var cors = require('cors')


const app = express()
app.use(cors())
const port = 5000
app.use(express.json())

// API's  starts
app.use('/add', require('./routes/content'))
app.use('/add_des', require('./routes/code_images'))


app.use('/get', require('./routes/content'))
app.use('/get', require('./routes/code_images'))


 
// API's  ends here











// Server configuration starts

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

https.createServer(options, app)
  .listen(port, function (req, res) {
    console.log("Server started at port 5000");
  });


app.listen(port, () => {
  console.log(`project app listening on port ${port}`)
})

// Mongo Db Connection Function
connecttomongo();