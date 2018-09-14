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

mongoose.connect('mongodb://localhost/message_board', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema
var CommentSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], minlength: [2, 'Name must be at least two characters'] },
  comment: { type: String, required: [true, 'Please input a comment, dummy!'], maxlength: [255, 'Whoa, calm down! Comment is too long!'] }
}, { timestamps: true });
var MessageSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], minlength: [2, 'Name must be at least two characters'] },
  message: { type: String, required: [true, 'Please input a message, dummy!'], maxlength: [255, 'Whoa, calm down! Message is too long!'] },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true, usePushEach: true });
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message');
const Comment = mongoose.model('Comment');

app.get('/', function(req, res) {
  Message.find({}).sort('-createdAt').populate('comments').exec(function(err, messages) {
    if (err) {
      console.log('something went wrong');
    }
    else {
      res.render('index', { allMessages: messages });
    }
  });
});

app.post('/messages', function(req, res) {
  var message = new Message({ name: req.body.name, message: req.body.message });
  message.save(function(err) {
    if (err) {
      console.log('something went wrong');
      for (var key in err.errors) {
        console.log('something went wrong:', err.errors[key].message);
        req.flash('create', err.errors[key].message);
      }
      return res.redirect('/');
    }
    console.log('created message');
    return res.redirect('/');
  });
});

app.post('/comments/:id', function(req, res) {
  // var comment = new Comment({ name: req.body.name, comment: req.body.comment });
  // comment.save(function(err) {
  //   if (err) {
  //     console.log('something went wrong');
  //     for (var key in err.errors) {
  //       req.flash('create', err.errors[key].message);
  //     }
  //     res.redirect('/');
  //   }
  //   else {
  //     Message.findOne({_id: req.params.id}, function(err, message) {
  //       message.comments.push({comments: comment});
  //       message.save(function(err) {
  //         if (err) {
  //           console.log('error:', err);
  //           res.redirect('/');
  //         }
  //         else {
  //           console.log('created comment');
  //           res.redirect('/');
  //         }
  //       })
  //     });
  //   }
  // });
  Message.findOne({_id: req.params.id}, function(err, message) {
    console.log('\nI am here\n');
    var comment = new Comment({ name: req.body.name, comment: req.body.comment });
    message.comments.push(comment);
    comment.save(function(err) {
      if (err) {
        console.log('Error:', err);
      }
      else {
        message.save(function(err) {
          if (err) {
            console.log('error:', err);
            res.redirect('/');
          }
          else {
            console.log('created comment');
            res.redirect('/');
          }
        });
      }
    });
  });
});

app.listen(6789, function() {
  console.log("listening on port 6789");
});
