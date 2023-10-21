const express = require('express')
const ControllerAtendimento = require('../controllers/atendimento.js')
const authMiddleware = require('../middleware/auth.js')

const controller = new ControllerAtendimento()
const RouterAtendimentos = express.Router()

RouterAtendimentos.get('/petlife/usuario/:id', authMiddleware, controller.PegarUm)
RouterAtendimentos.get('/petlife/usuario/', authMiddleware, controller.PegarTodos)
RouterAtendimentos.post('/petlife/usuario', authMiddleware, controller.Add)
RouterAtendimentos.put('/petlife/usuario/:id', authMiddleware, controller.Update)
RouterAtendimentos.delete('/petlife/usuario/:id', authMiddleware, controller.Delete)

module.exports = RouterAtendimentos