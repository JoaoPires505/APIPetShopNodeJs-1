const usuario = require('../models/usuario.js')

class RepositorieUsuarios {

    async PegarUmPorEmail(email ){
        return Pessoa.findOne({
            where: {
                email
            }
        })
    }

    async PegarUm(id, transaction) {
        return usuario.findOne({
            where: { id },
            transaction
        });
    }
    
    async PegarTodos() {
        return usuario.findAll();
    }

    async Add(usuario, transaction) {
        const result = await usuario.create(usuario, { transaction })

        return result
    }

    async Update(id, usuario) {
        const result = await Usuario.update(usuario, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Delete(id) {
        return usuario.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieUsuarios