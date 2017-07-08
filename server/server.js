var bodyParser = require ('body-parser');
var express = require ('express');
var path = require ('path');
const app = express()
// var passport = require('passport');
// var session = require('express-session');
// var cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use(cookieParser());
// app.use(session({ secret: 'see me here', resave: true, saveUninitialized: true  }));
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/passport')(passport);

const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)


  


app.use(router)

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)


require("./controllers/api-routes")(app);

var Promise = require("bluebird");

var options = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  replset: { rs_name: 'myReplicaSetName' }
}

options.server.socketOptions = options.replset.socketOptions = { keepAlive: 120 };

var mongoose = require("mongoose");

mongoose.Promise = Promise;

console.log("run");

mongoose.connect("mongodb://hostman:hostmanbestman1@ds151662.mlab.com:51662/heroku_xqq82l40", options);

var db = mongoose.connection;
db.on("error", function (error) {


});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  require("./scripts").startUp();  
  console.log(`Listening on ` + PORT)
})







