var express = require("express");

var session = require('express-session')

var path = require("path");

var app = express();
var bodyParser = require('body-parser');

app.use(session({
  secret: 'shhhthisissecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  if (!(request.session.counter)) {
    request.session.counter = 0;
  }
  request.session.counter += 1;
  console.log(request.session.counter);
  response.render("index", { 'counter': request.session.counter });
});

app.get('/twice', function(request, response) {
  request.session.counter += 1;
  response.redirect('/');
})

app.get('/reset', function(request, response) {
  request.session.counter = 0;
  response.redirect('/');
})

// app.post('/users', function(request, response) {
//  console.log("POST DATA", request.body);
//  response.redirect('/');
// })

app.listen(6789, function() {
  console.log("listening on port 6789");
});
