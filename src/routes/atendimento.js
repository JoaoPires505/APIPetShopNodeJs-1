const express = require('express')
const ControllerAtendimento = require('../controllers/atendimento.js')
const authMiddleware = require('../middleware/auth.js')

const controller = new ControllerAtendimento()
const RouterAtendimentos = express.Router()

RouterAtendimentos.get('/petlife/atendimento/:id', authMiddleware, controller.PegarUm)
RouterAtendimentos.get('/petlife/atendimento/', authMiddleware, controller.PegarTodos)
RouterAtendimentos.post('/petlife/atendimento', authMiddleware, controller.Add)
RouterAtendimentos.put('/petlife/atendimento/:id', authMiddleware, controller.Update)
RouterAtendimentos.delete('/petlife/atendimento/:id', authMiddleware, controller.Delete)

module.exports = RouterAtendimentos