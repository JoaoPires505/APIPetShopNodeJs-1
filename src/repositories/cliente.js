const cliente = require('../models/cliente.js')

class RepositorieClientes {

    async PegarUm(id, transaction) {
        return cliente.findOne({
            where: { id },
            transaction
        });
    }
    
    async PegarTodos() {
        return cliente.findAll();
    }

    async Add(cliente, transaction) {
        const result = await cliente.create(cliente, { transaction })

        return result
    }

    async Update(id, cliente) {
        const result = await Cliente.update(cliente, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Delete(id) {
        return cliente.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieClientes