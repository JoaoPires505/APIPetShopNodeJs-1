const Cliente = require("../models/cliente.js");

class RepositoriesClientes {
  async PegarClientePorId(id, transaction) {
    return Cliente.findOne({
      where: { id },
      transaction,
    });
  }
  async PegarTodosOsClientes() {
    return Cliente.findAll({});
  }
  async CriarCliente(cliente, transaction) {
    return Cliente.create(cliente, { transaction });
  }

  async AtualizarCliente(id, cliente) {
    return Cliente.update(cliente, {
      where: { id },
    });
  }
    async DeletarCliente(id) {
        return Cliente.destroy({
        where: { id },
        });
    }
}
module.exports = new RepositoriesClientes();