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
const moment = require('moment');

app.use(express.static(path.join(__dirname, './node_modules')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;
var QuoteSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  quote: { type: String, required: true, maxlength: 255 }
}, { timestamps: true });
mongoose.model('Quote', QuoteSchema);
const Quote = mongoose.model('Quote');

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/quotes', function(req, res) {
  console.log("POST DATA:", req.body);
  var quote = new Quote({ name: req.body.name, quote: req.body.quote });
  quote.save(function(err) {
    if (err) {
      console.log('Something went wrong:', err);
      for (var key in err.errors) {
        req.flash('submit', err.errors[key].message);
      }
      res.redirect('/');
    }
    else {
      console.log('successfully added a user!');
      res.redirect('/quotes');
    }
  });
});

app.get('/quotes', function(req, res) {
  Quote.find({}).sort('-createdAt').exec(function(err, quotes) {
    if (err) {
      console.log('something went wrong');
    }
    else {
      // console.log(quotes);
      res.render('quotes', {quotes: quotes, moment: moment});
    }
  });
});

app.listen(6789, function() {
  console.log("listening on port 6789");
});
