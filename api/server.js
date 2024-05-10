const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const mushroomRouter = require('./mushroom/mushroom-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

// add restricted to this later
server.use('/api/v1/mushrooms', mushroomRouter)

server.get("/",(req,res)=> {
  res.send("hello")
})

server.use((err, req, res, next) => { //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })

})


module.exports = server



