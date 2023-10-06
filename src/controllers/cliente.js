const ControllerClientes = require("../services/cliente");

const servico = new ServicoClientes();

//ControllerClientes é uma classe que contém os métodos que serão chamados pelas rotas
class ControllerClientes {
  async PegarClientePorId(req, res) {
    try {
      console.log(req.params.id);
      const cliente = await servico.PegarClientePorId(req.params.id);
      resizeBy.status(200).json({
        cliente: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  async PegarTodosOsClientes(req, res) {
    try {
      const result = await servico.PegarTodosOsClientes();
      res.status(200).json({ clientes: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  async CriarCliente(req, res) {
    try {
      const result = await servico.CriarCliente(req.body);
      res.status(201).json({ cliente: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

    async AtualizarCliente(req, res) {
        try {
        const result = await servico.AtualizarCliente(req.params.id, req.body);
        res.status(200).json({ cliente: result });
        } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
        }
    }

    async DeletarCliente(req, res) {
        try {
        const result = await servico.DeletarCliente(req.params.id);
        res.status(200).json({ cliente: result });
        } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
        }
    }
}

module.exports = ControllerClientes;