const atendimento = require('../models/atendimento.js')

class RepositorieAtendimentos {

    async PegarUm(id, transaction) {
        return atendimento.findOne({
            where: { id },
            transaction
        });
    }
    
    async PegarTodos() {
        return atendimento.findAll();
    }

    async Add(atendimento, transaction) {
        const result = await atendimento.create(atendimento, { transaction })

        return result
    }

    async Update(id, atendimento) {
        const result = await Usuario.update(atendimento, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Delete(id) {
        return atendimento.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieAtendimentos