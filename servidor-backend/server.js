const express = require('express')
const cors = require('cors')
const controller = require('./ComidasController')

const server = express()
server.use(cors())
server.get("/comidas", (request, response) => {
    response.send(controller.getAll())
})

server.listen(4000)
console.log("servidorzinho querido rodando na porta 4000")
