var express = require("express");
require("./models/User");
var mongoose = require("mongoose");
var passport = require('passport');
var cookieSession = require('cookie-session');
require("./services/passport");
var authRoutes = require("./routes/authRoutes");
var keys = require('./config/keys');


mongoose.connect("mongodb://localhost/test");





var app = express(); // create an obj of type express

app.use(
        cookieSession({
            maxAge: 30 * 24 * 60 * 60* 1000,
            keys: [keys.cookieKey]
            
        })
    );
    
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);






app.set("port", process.env.PORT || 3000); // set up the port to be automatic or use the port 3000


app.listen(app.get("port"), function() { // run and listen to incoming requests to the server
    console.log("Server started on port " + app.get("port"));
});


/*




*/
