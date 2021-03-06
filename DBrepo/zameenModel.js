var mongoose = require("mongoose"); //mongodb driver


//////////////schema and model///////////////////////////////////////////
var zameenSchema = new mongoose.Schema({
    title: String,
    location: String,
    image: String,
    description: String,
    landLord: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    accountBalance: { type: Number, default: 0 },
    createdOn: { type: Date, 'default': Date.now }, //pack 'default' in single quotes(this is Optional) to avoid compile error
});

module.exports = mongoose.model("zameen", zameenSchema);;
//////////////schema and model//////////////////////////////////////////