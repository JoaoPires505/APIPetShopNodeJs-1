const express = require('express')
const ControllerExercicio = require('../controllers/cachorro.js')
const authMiddleware = require('../middleware/auth.js')

const controller = new ControllerExercicio()
const RouterCachorros = express.Router()

RouterAtendimentos.get('/petlife/cachorro/:id', authMiddleware, controller.PegarUm)
RouterAtendimentos.get('/petlife/cachorro/', authMiddleware, controller.PegarTodos)
RouterAtendimentos.post('/petlife/cachorro', authMiddleware, controller.Add)
RouterAtendimentos.put('/petlife/cachorro/:id', authMiddleware, controller.Update)
RouterAtendimentos.delete('/petlife/cachorro/:id', authMiddleware, controller.Delete)

module.exports = RouterCachorros