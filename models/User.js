var mongoose = require("mongoose");
var Schema = mongoose.Schema;


const userSchema = new Schema({
   googleId: String  
});

var users= mongoose.model('users', userSchema);

module.exports= users;
