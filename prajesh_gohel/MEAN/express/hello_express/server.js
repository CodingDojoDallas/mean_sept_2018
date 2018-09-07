var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);

app.get('/', function(request, response) {
  console.log("The request object", request);
  console.log("The response object", response);
});

app.set("views", __dirname + "/views");

app.set("view engine", "ejs");

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
});

app.listen(8000, function() {
  console.log("listening on 8000");
});
