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
const uniqueValidator = require('mongoose-unique-validator');
const flash = require('express-flash');
app.use(flash());
const moment = require('moment');
const bcrypt = require('bcryptjs');

app.use(express.static(path.join(__dirname, './node_modules')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 255],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]}',
  }),
  validate({
    validator: 'isAlpha',
    passIfEmpty: true,
    message: 'Name should contain letters only',
  })
];

const emailValidator = [
  validate({
    validator: 'isEmail',
    passIfEmpty: true,
    message: 'Please enter a valid email address'
  })
];

const dateValidator = [
  validate({
    validator: function(bday) {
      var today = Date.now();
      var age = today.year - bday.year - ((today.month, today.day) < (bday.month, bday.day));
      if (age < 13) {
        return false;
      }
    },
    passIfEmpty: true,
    message: 'You must be 13 years or older to enter!'
  })
];

mongoose.connect('mongodb://localhost/login_register', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true, validate: nameValidator },
  last_name: { type: String, required: true, validate: nameValidator },
  email: { type: String, required: true, unique: true, validate: emailValidator },
  birthday: { type: Date, required: true, validate: dateValidator },
  password: { type: String, required: true }
}, { timestamps: true });
UserSchema.plugin(uniqueValidator);
mongoose.model('User', UserSchema);
const User = mongoose.model('User');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/success', function(req, res) {
  User.findOne({_id: req.session.userId}, function(err, user) {
    if (err) {
      console.log('something went wrong:', err);
      return res.redirect('/');
    }
    console.log('found user', user);
    return res.render('success', {user: user});
  })
})

app.post('/users', function(req, res) {
  if (req.body.password != req.body.pass_confirm) {
    req.flash('registration', "Please check your passwords, dummy!");
    return res.redirect('/');
  }
  bcrypt.hash(req.body.password, 10)
  .then(hashed_password => {
    console.log(hashed_password);
    var user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      birthday: req.body.birthday,
      password: hashed_password
    });
    user.save(function(err) {
      if (err) {
        console.log('something went wrong', err);
        for (var key in err.errors) {
          req.flash('registration', err.errors[key].message);
        }
        return res.redirect('/');
      }
      req.session.userId = user._id;
      return res.redirect('/success');
    });
  })
  .catch(error => {
    console.log('something went wrong:', error);
    return res.redirect('/');
  });
});

app.listen(6789, function() {
  console.log("listening on port 6789");
});
