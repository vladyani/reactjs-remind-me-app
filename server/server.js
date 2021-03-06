const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const Task = require('./api/models/remindMeModel');//created model loading here
const bodyParser = require('body-parser');
const keys = require('./config/keys');

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoDb.dbURI, () => {
    console.log('connected to mongodb brother');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/remindMeRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('remind me app list RESTful API server started on: ' + port);
