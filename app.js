//Imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
/* cors for cross domain data requests.
const cors = require('cors')*/
//Import routes
var co2Route = require('./routes/co2');
var liveRoute = require('./routes/live');
//Import env
require('dotenv/config');


app.use(bodyParser.json());



//Middlewares
app.use(cors());
app.use('/co2', co2Route);

app.use('/live', liveRoute);


//ROUTES
app.get('/', (req, res) => { 
    res.send('Send get/post/delete/patch requests for/with data to https://interactiveellieapi.herokuapp.com/co2, Send get/put/patch requests for/with live data to https://interactiveellieapi.herokuapp.com/live/co2' );
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
