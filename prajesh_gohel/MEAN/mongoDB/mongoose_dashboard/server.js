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

mongoose.connect('mongodb://localhost/mongoose_dashboard');
mongoose.Promise = global.Promise;
var BirdSchema = new mongoose.Schema({
  first_name: {type: String, required: [true, 'First name is required'], minlength: [2, 'First name must be at least two characters']},
  last_name: {type: String, required: [true, 'Last name is required'], minlength: [2, 'Last name must be at least two characters']},
  age: {type: Number, required: [true, 'Age is required'], min: [3, 'Must be 3 months or older']}
}, {timestamps: true});
mongoose.model('Bird', BirdSchema);
const Bird = mongoose.model('Bird');

app.get('/', function(req, res) {
  Bird.find({}).exec(function(err, birds) {
    if (err) {
      console.log('something went wrong:', err);
    }
    else {
      res.render('index', {birds: birds});
    }
  });
});

app.get('/birds/new', function(req, res) {
  res.render('new');
});

app.post('/birds', function(req, res) {
  var bird = new Bird({first_name: req.body.first_name, last_name: req.body.last_name, age: req.body.age});
  bird.save(function(err) {
    if (err) {
      console.log('something went wrong');
      for (var key in err.errors) {
        req.flash('create', err.errors[key].message);
      }
      res.redirect('/birds/new');
    }
    else {
      console.log('successfully created bird');
      res.redirect('/');
    }
  });
});

app.get('/birds/:id', function(req, res) {
  Bird.findOne({_id: req.params.id}).exec(function(err, bird) {
    if (err) {
      console.log('something went wrong:', err);
      res.redirect('/');
    }
    else {
      res.render('show', {bird: bird});
    }
  });
});

app.get('/birds/edit/:id', function(req, res) {
  console.log(req.params.id);
  Bird.findById(req.params.id).exec(function(err, bird) {
    if (err || !Bird) {
      console.log('something went wrong:', err);
      res.redirect('/');
    }
    else {
      res.render('edit', {bird: bird});
    }
  });
});

app.post('/birds/:id', function(req, res) {
  Bird.update({_id: req.params.id}, {$set: {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age
  }}, {runValidators: true}).exec(function(err) {
    if (err) {
      console.log('something went wrong:', err);
      for (var key in err.errors) {
        req.flash('edit', err.errors[key].message);
      }
      // res.redirect('/birds/edit/'+bird._id);
      res.redirect(`/birds/edit/${req.params.id}`);
    }
    else {
      console.log('successfully updated bird');
      res.redirect('/');
    }
  });

  // Bird.update({_id: req.params.id}, {
  //   first_name: req.body.first_name,
  //   last_name: req.body.last_name,
  //   age: req.body.age
  // },{runValidators: true}, (err, this_bird) => {
  //   if (err) {
  //     console.log('something went wrong:', err);
  //     for (var key in err.errors) {
  //       req.flash('create', err.errors[key].message);
  //     }
  //     res.redirect('/birds/edit/:id');
  //   }
  //   else {
  //     res.redirect('/')
  //   }
  // })

  // Bird.findOne({_id: req.params.id}, function(err, bird) {
  //   console.log(req.body);
  //   console.log("\nbird:", bird);
  //   bird.first_name = req.body.first_name;
  //   bird.last_name = req.body.last_name;
  //   bird.age = req.body.age;
  //   bird.save(function(err) {
  //     if (err) {
  //       console.log('validation:', err);
  //       for (var key in err.errors) {
  //         req.flash('edit', err.errors[key].message);
  //       }
  //       res.redirect('/birds/edit/'+bird._id);
  //     }
  //     else {
  //       console.log('successfully updated bird');
  //       res.redirect('/');
  //     }
  //   });
  // });
});

app.post('/birds/destroy/:id', function(req, res) {
  Bird.remove({_id: req.params.id}, function(err) {
    if (err) {
      console.log(err);
      res.redirect('/');
    }
    else {
      res.redirect('/');
    }
  });
});

app.listen(6789, function() {
  console.log("listening on port 6789");
});
