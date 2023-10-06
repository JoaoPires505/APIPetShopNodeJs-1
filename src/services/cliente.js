const RepositoriesClientes = require("../repositories/cliente.js");


const repositorio = new RepositoriesClientes()

class ServicesClientes {

    VerficarClientes(cliente) {
        if(!cliente){
            throw new Error("Não foi enviado nenhum Cliente para ser adicionado")
        }else if(!cliente.nome){
            throw new Error("O nome do cliente não foi enviado")
        }else if(!cliente.telefone){
            throw new Error("O telefone do cliente não foi enviado")
        }
        return true
    }

    async PegarClientePorId(id, transaction) {
        return repositorio.PegarClientePorId(id, transaction)
    }

    async PegarTodosOsClientes() {
        return repositorio.PegarTodosOsClientes()
    }

    async CriarCliente(cliente, transaction) {
        this.VerficarClientes(cliente)
        return repositorio.CriarCliente(cliente, transaction)
    }

    async AtualizarCliente(id, cliente) {
        this.VerficarClientes(cliente)
        return repositorio.AtualizarCliente(id, cliente)
    }

    async DeletarCliente(id) {
        return repositorio.DeletarCliente(id)
    }
}

module.exports = new ServicesClientes();