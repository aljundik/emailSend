var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy; // require goole strategy from google passport 
var keys = require("../config/keys");

passport.use(new GoogleStrategy({ // sent the clent id with the secret and recive the code token from google

    clientID: '1085757936343-rp1gtde15eu19safpt20rjqa67j2op6o.apps.googleusercontent.com',
    clientSecret:  'NVSiiyJKqRZu_X_5dF9HLf3g',
    callbackURL:  '/auth/google/callback'
    
},  function(accessToken,refreshToken,profile) {
    console.log("Access Token: ",accessToken);
    console.log("Refresh Token: ",refreshToken);
    console.log("profile: ",profile);
    })

); // .use (iwant you to be a ware of this strategy) create new instance of google strategy,, (i want authentcate my users)