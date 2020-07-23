const mongoose = require("mongoose");

var LogInSchema = mongoose.Schema({
  firstName: { type: String , required :true},
  password: { type: String, min: 15, required : true},
  email :{type:String ,required:true}
});
var LogInModel = mongoose.model("LogInModel", LogInSchema);

module.exports = LogInModel;
