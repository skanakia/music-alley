const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const dbConnection = require('./database');
const cookieSession = require('cookie-session');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
// import MongoStore from 'connect-mongo';
const passport = require('./passport');
const app = express();
var cors = require('cors');
const PORT = process.env.PORT || 3001;

app.use(cors());

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Accept');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });


// Connect to the Mongo DB
const dbConnection = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/musicbase"
);


// // Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// // Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const routes = require("./routes");
// Add routes, both API and view
app.use(routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});