import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

app.get('/test', function (req, res) {
  res.json({"here" : "fucker"});
});

app.use(router)

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

var Promise = require("bluebird");

var mongoose = require("mongoose");

mongoose.Promise = Promise;

console.log("run");

// mongoose.connect("mongodb://localhost/nyt_db");
// var db = mongoose.connection;
// db.on("error", function (error) {
// 	console.log("Mongoose Error: ", error);
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on ` + PORT)
})
