const LogInPath = require('../models/logInModel')
var bcrypt = require('bcrypt');
const logIn = function(server){
    server.post("/logIn",async(req,res)=>{
      try {
        var user = await LogInPath.findOne({ firstName: req.body.firstName}).exec();
        if(!user) {
            return res.status(400).send({ message: "The username does not exist" });
        }
        if(!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send({ message: "The password is invalid" });
        }
        res.send({ message: "The username and password combination is correct!" });
      } catch (error) {
        response.status(500).send(error);
      }
    }) 

    
}

module.exports = { logIn}