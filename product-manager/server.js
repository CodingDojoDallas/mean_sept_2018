var express    = require('express'),
    app        = express(),
    mongoose   = require('./server/config/mongoose'),
    bodyParser = require('body-parser'),
    path       = require('path'),
    port       = 8000;


app.use(express.static(path.join(__dirname, 'public', 'dist', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log(`listening on port ${port}`);
})
