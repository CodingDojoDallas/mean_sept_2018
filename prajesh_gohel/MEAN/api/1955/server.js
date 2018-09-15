const express = require('express'),
      app = express(),
      path = require('path'),
      mongoose = require('./server/config/mongoose.js'),
      bodyParser = require('body-parser'),
      port = 1337;

app.use(bodyParser.json());
require('./server/config/routes.js')(app);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
