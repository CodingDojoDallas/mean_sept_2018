var express = require("express"),
    app = express(),
    path = require("path");

app.get('/', function(request, response) {
  response.render('index');
});

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");

app.set("view engine", "ejs");

app.get('/cars', function(request, response) {
  response.render('cars');
});

app.get('/cats', function(request, response) {
  response.render('cats');
});

app.get('/stripes', function(request, response){
  let stripes_array = [
    {name: "Stripes", food: "Pasta", age: "3", sleeps: ["under the bed", "in a sunbeam"]}
  ]
  response.render('stripes', {stripes: stripes_array})
})

app.get('/cars/new', function(request, response) {
  response.render('form');
});

app.listen(8000, function() {
  console.log("listening on 8000");
});
