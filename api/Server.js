const express=require('express');
const bodyParser = require("body-parser");
var session = require('express-session');
// serveur html
var app = express();

app.use(session({secret:'XASDASDA'}));
app.use(bodyParser.urlencoded({ extended: true }));

var ssn;

app.listen(3000);

console.log('todo list RESTful API server started on: ' + 3000);
app.get('/', function (req, res){
  res.write("hello");
  res.end();
});

app.use("/login", require('./Login'));
app.use("/logout", require('./Logout'));


module.exports = app;
