const express = require('express')
const cors = require('cors')
const controller = require('./ComidasController')
const bodyParser = require('body-parser')

const server = express()
server.use(cors())
server.get("/comidas", (request, response) => {
    response.send(controller.getAll())
})

server.post('/comidas', bodyParser.json(), (request, response) => {
    controller.add(request.body)
    response.send(201)

})

server.listen(4000)
console.log("servidorzinho querido rodando na porta 4000")
