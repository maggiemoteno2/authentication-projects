const LogInPath = require('../models/logInModel')

const logIn = function(server){
    server.post("/loggedIn",async(req,res)=>{
        try {
            
            const logInSchema = new LogInPath({
              firstName: req.body.firstName,
              password: req.body.password
            });
            const logInDetails =logInSchema.save({firstName: req.body.firstName , password:req.body.password});
            res.status(201).json(logInSchema);
            console.log(logInDetails)
          }catch(e){
        console.log(e)
          }
console.log()
    }) 

    
}

module.exports = { logIn}