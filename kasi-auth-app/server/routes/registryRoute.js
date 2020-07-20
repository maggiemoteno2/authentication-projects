const Register = require('./../models/registryModel')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const register = function(server){
   server.post("/register",async(req,res)=>{
         
try {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  var registeryDetails = new Register(req.body);
  var registerDetails = await registeryDetails .save();
  res.send(registerDetails);
} catch (error) {
  response.status(500).send(error);
}
       
   })
}



    module.exports = {register}