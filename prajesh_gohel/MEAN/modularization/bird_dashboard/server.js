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
const flash = require('express-flash');
app.use(flash());

app.use(express.static(path.join(__dirname, './node_modules')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/models/birds.js');

require('./server/config/routes.js')(app);

app.listen(6789, function() {
  console.log("listening on port 6789");
});
