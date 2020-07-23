const Register = require('./../models/registryModel')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()




const register = function(server){
   server.post("/register",async(req,res)=>{
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
    Register.create({
      firstName : req.body.firstName ,
      password : hashedPassword,
      email : req.body.email,
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      var token = jwt.sign({ id: user._id ,firstName:user.firstName,email:user.email,}, process.env.SECRET, {
        expiresIn: 86400 
      });
      res.status(200).send({ auth: true, token: token });
    }); 
       
   })

}



    module.exports = {register}