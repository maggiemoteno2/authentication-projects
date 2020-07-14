const mongoose = require("mongoose");

var LogInSchema = mongoose.Schema({
  firstName: { type: String , required :true},
  password: { type: Number, min: 15, max: 20, required : true},
});
var LogInModel = mongoose.model("LogInModel", LogInSchema);

module.exports = LogInModel;
