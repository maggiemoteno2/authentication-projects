const mongoose = require("mongoose");
const MONGOURI = "mongodb+srv://Maggie-Moteno:Maggie-Thabo2000@maggie1-qiqvh.mongodb.net/userLogInDetails?retryWrites=true&w=majority";


const MongoServer = async () => {
    try {
      await mongoose.connect(MONGOURI, {
        useNewUrlParser: true, useUnifiedTopology: true
      });
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  
  module.exports = {MongoServer};