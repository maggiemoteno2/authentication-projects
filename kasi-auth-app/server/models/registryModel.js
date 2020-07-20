const mongoose = require("mongoose");

var RegisterSchema = mongoose.Schema({
  firstName: { type: String , required :true},
  password: { type: String, min: 15, required : true},
});



var RegistryModel = mongoose.model("RegistryModel", RegisterSchema);

module.exports = RegistryModel;