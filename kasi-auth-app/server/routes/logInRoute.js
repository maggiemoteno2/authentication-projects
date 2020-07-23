const Register = require('./../models/registryModel')
var bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
require('dotenv').config()


const logIn = function (server) {
  server.post('/logIn', function(req, res) {

    Register.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      
      var token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 86400 
      });
      
      res.status(200).send({ auth: true, token: token });
    });
    
  });
};

module.exports = { logIn };



