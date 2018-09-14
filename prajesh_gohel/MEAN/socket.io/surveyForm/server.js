const express = require('express');

const session = require('express-session');

const path = require('path');

const app = express();

const bodyParser = require('body-parser');

const server = app.listen(1337);

const io = require('socket.io')(server);

var counter = 0

app.use(session({
  secret: 'shhhthisissecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./node_modules/bootstrap/dist/")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render("index");
});

app.post('/', function(request, response) {
  var package = request.body;

})

io.on('connection', function(socket) {
  // console.log("I don't know");
  socket.emit('hello', { msg: 'Greetings, from server Node, brought to you by Sockets! - Server' });
  socket.on('thankyou', function(data) {
    console.log(data.msg);
  });
});

console.log("Listening on port 1337");
