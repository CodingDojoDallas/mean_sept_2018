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

mongoose.connect('mongodb://localhost/login_register', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true, validate: nameValidator },
  last_name: { type: String, required: true, validate: nameValidator },
  email: { type: String, required: true, unique: true, validate: emailValidator },
  birthday: { type: Date, required: true, validate: dateValidator },
  password: { type: String, required: true, validate: passwordValidator }
}, { timestamps: true });
UserSchema.plugin(uniqueValidator);
mongoose.model('User', UserSchema);
const User = mongoose.model('User');

app.get('/', function(req, res) {
  res.render('index');
})

app.listen(6789, function() {
  console.log("listening on port 6789");
});
