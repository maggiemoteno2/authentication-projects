const express = require('express')
const server=express()
const bodyParser = require('body-parser');
const session = require('express-session');
const port = process.env.PORT | 3001
const {logIn} = require('./routes/logInRoute')
const {register} = require('./routes/registryRoute')
const {MongoServer} = require('./config/dbConnection')
var cors = require('cors')



server.use(cors())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 

server.listen(port)

logIn(server)
MongoServer(server)
register(server)