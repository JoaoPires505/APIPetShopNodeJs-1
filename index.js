const express = require('express')
const RouterClientes= require('./src/routes/cliente.js')
const RouterCachorros= require('./src/routes/cachorro.js')


const app = express()
const port = 3000

app.use(express.json())
app.use(RouterCachorros, RouterClientes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
    