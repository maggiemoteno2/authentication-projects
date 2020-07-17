const Register = require('./../models/registryModel')

const register = function(server){
   server.post("/register",async(req,res)=>{
       try{
          const registerSchema = new Register({
            firstName: req.body.firstName,
            password: req.body.password
          })
          const registeryDetails = await registerSchema.save({firstName: req.body.firstName,
            password: req.body.password})
            res.status(201).json(registeryDetails)
       }catch(e){
           console.log(e)
       }
   })
}

    
    
    
    module.exports = {register}