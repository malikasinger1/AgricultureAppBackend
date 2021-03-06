var mongoose = require("mongoose"); //mongodb driver
var q = require("q"); //to return deferred.promise from function


//////////////schema and model///////////////////////////////////////////
var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, require: true },
    password: String,
    phone:String,
    createdOn: { type: Date, 'default': Date.now }, //pack 'default' in single quotes(this is Optional) to avoid compile error
});

module.exports = mongoose.model("users", userSchema);;
//////////////schema and model//////////////////////////////////////////