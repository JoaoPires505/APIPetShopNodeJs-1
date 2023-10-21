const RepositorieAtendimentos = require("../repositories/atendimento.js");

const repositorio = new RepositorieAtendimentos()

class ServicoAtendimentos {
    
    VerficarAtendimento(atendimento) {
        if(!atendimento){
            throw new Error('Não foi enviada adicionar o atendimento');
        } else if(!atendimento.data){
            throw new Error('Não foi enviado o data do atendimento');
        } else if(!atendimento.hora){
            throw new Error('Não foi enviado a hora da atendimento');
        } else if(!atendimento.valor){
            throw new Error('Não foi enviado o valor da atendimento');
        } else if(!atendimento.concluido){
            throw new Error('Não foi enviado o estado de concluido da atendimento');
        }

        return true
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(atendimento, transaction) {
        this.VerficarAtendimento(atendimento)

        return repositorio.Add(atendimento, transaction);
    }

    async Update(id, atendimento) {
        if(!id) {
            throw new Error('Não foi enviada o identificador da atendimento para alterar');
        } 
        this.VerficarAtendimento(atendimento)

        return repositorio.Update(id, atendimento);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = ServicoAtendimentos