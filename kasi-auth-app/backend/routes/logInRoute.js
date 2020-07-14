const LogInPath = require('./../models/logInModel')

const logIn = function(server){
    server.post("/loggedIn",(req,res)=>{
        res.json({ message: "API Working" });
console.log()
    }) 

    
}

module.exports = { logIn}