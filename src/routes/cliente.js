const controllers = new ControllerClientes()
const router = express.Router()

//Contem os métodos que serão chamados pelas rotas
router = express.Router()

router.get('/petlife/clientes/:id', controller.PegarClientePorId)
router.get('/petlife/clientes', controller.PegarTodosOsClientes)
router.post('/petlife/clientes', controller.CriarCliente)
router.put('/petlife/clientes/:id', controller.AtualizarCliente)
router.delete('/petlife/clientes/:id', controller.DeletarCliente)

module.exports = router