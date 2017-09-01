var express = require("express");
require("./models/User");
var mongoose = require("mongoose");
require("./services/passport");
var authRoutes = require("./routes/authRoutes");

mongoose.connect("mongodb://localhost/test");





var app = express(); // create an obj of type express
require("./routes/authRoutes")(app);






app.set("port", process.env.PORT || 3000); // set up the port to be automatic or use the port 3000


app.listen(app.get("port"), function() { // run and listen to incoming requests to the server
    console.log("Server started on port " + app.get("port"));
});


/*




*/
