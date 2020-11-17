//Imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
/* cors for cross domain data requests.
const cors = require('cors')*/
//Import routes
var postsRoute = require('./routes/posts');
//Import env
require('dotenv/config');


app.use(bodyParser.json());



//Middlewares
//app.use(cors());
app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req, res) => { 
    res.send('We are on home');
});

//connect to database
mongoose.connect(process.env.DB_CONNECTION,
 { useNewUrlParser: true, useUnifiedTopology: true },
 () => { console.log("Connected to db");
})

//listen to server
let port = process.env.PORT;
if (port == null || port == "") {
  
  port = 8000;
  
}
console.log(port);
app.listen(port);
