const express = require('express');

const app = express();

app.use(express.static(__dirname + "/public"));

const server = app.listen(1337);

const io = require('socket.io')(server);

var counter = 0;

io.on('connection', function(socket) {
  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! - Server' });
  socket.on('thankyou', function(data) {
    console.log(data.msg);
  });
});
