const cachorro = require('../models/cachorro.js')

class RepositorieCachorros {

    async PegarUm(id, transaction) {
        return cachorro.findOne({
            where: { id },
            transaction
        });
    }
    
    async PegarTodos() {
        return cachorro.findAll();
    }

    async Add(cachorro, transaction) {
        const result = await cachorro.create(cachorro, { transaction })

        return result
    }

    async Update(id, cachorro) {
        const result = await Cachorro.update(cachorro, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Delete(id) {
        return cachorro.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieCachorros