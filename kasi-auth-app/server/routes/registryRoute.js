const Register = require('./../models/registryModel')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()


const register = function(server){
   server.post("/register",async(req,res)=>{
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
    Register.create({
      firstName : req.body.firstName ,
      password : hashedPassword
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 86400 
      });
      res.status(200).send({ auth: true, token: token });
    }); 
       
   })


   server.get('/register', function(req, res,user) {
    Register.findById(user.id, 
      { password: 0 },
      function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        
        res.status(200).send(user);
    });
  });
}



    module.exports = {register}