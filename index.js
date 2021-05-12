
const { request, response } = require('express')
const express = require('express')
const server = express()

//Middleware
server.use(express.json())

// const port = 3000

server.get('/hola', (request, response) => {
    response.write('GET /Hola')
    response.end()
})
server.post('/hola', (request, response) => {
    response.write('Este es un POST a /hola')
    response.end()
})

// GET  /koders -> aquí estan todos los koders
// POST  /koders -> aquí puedes crear koders
// PUT  /koders -> aquí puedes sustiruir un koder

server.get('/koders', (request, response) => {
    response.write('aquí estan todos los koders')
    response.end()
})

server.post('/koders', (request, response) => {
    response.write('aquí puedes crear koders')
    response.end()
})

server.put('/koders', (request, response) => {
    response.write('aquí puedes sustiruir un koder')
    response.end()
})

// JSON koders

server.get('/kodersJSON', (request, response) => {
    response.json({message: 'Aquí la lista de koders'})
})

//users proobs

server.post('/users', (request, response) => {
    const cuerpo = request.body
    console.log('body: ', cuerpo)
    console.log('el nombre en el json es: ', cuerpo.name)
    response.json({
        message: 'ok'
    })
})

server.listen(8080, () => {
    console.log('Server listening in port 8080')
})



