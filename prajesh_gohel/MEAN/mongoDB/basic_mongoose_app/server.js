const express = require('express');
const app = express();
const session = require('express-session');
app.use(session({
  secret: 'shhhthisissecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
const path = require('path');
const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const flash = require('express-flash');
app.use(flash());

mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
mongoose.model('User', UserSchema);
const User = mongoose.model('User');

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      console.log('something went wrong');
    }
    else {
      console.log(users);
      res.render('index', {allUsers: users});
    }
  });
});

app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);
  var user = new User({name: req.body.name, age: req.body.age});
  user.save(function(err) {
    if (err) {
      console.log('something went wrong');
    }
    else {
      console.log('successfully added a user!');
      res.redirect('/');
    }
  });
});

app.listen(6789, function() {
  console.log("listening on port 8000");
});
