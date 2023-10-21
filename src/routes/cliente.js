const express = require('express')
const ControllerExercicio = require('../controllers/cliente.js')
const authMiddleware = require('../middleware/auth.js')

const controller = new ControllerExercicio()
const RouterClientes = express.Router()

RouterClientes.get('/petlife/cliente/:id', authMiddleware, controller.PegarUm)
RouterClientes.get('/petlife/cliente/', authMiddleware, controller.PegarTodos)
RouterClientes.post('/petlife/cliente', authMiddleware, controller.Add)
RouterClientes.put('/petlife/cliente/:id', authMiddleware, controller.Update)
RouterClientes.delete('/petlife/cliente/:id', authMiddleware, controller.Delete)

module.exports = RouterClientes