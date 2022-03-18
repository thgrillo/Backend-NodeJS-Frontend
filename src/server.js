const express = require('express')
const route = require('./route') //importar arquivo js rotas
const path = require('path') //pra usar os caminhos do sistema e declarar no node

const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views')) // especificando caminho e pasta

server.use(route) // usar arquivo rotas

server.listen(3000, () => console.log('RODANDO'))