var express = require("express");
var app = express();

//connecting path? meaning to routes?

var PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);



app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
