const RepositorieUsuarios = require("../repositories/usuario.js");

const repositorio = new RepositorieUsuarios()

class ServicoUsuarios {

    async PegarumporEmail(email){
        if(!email.trim()){
            throw new Error("Preencha o email")
        }
        return repositorio.PegarUmPorEmail(email)
    }
    
    VerficarUsuario(usuario) {
        if(!usuario){
            throw new Error('Não foi enviada a usuario para adicionar');
        } else if(!usuario.nome){
            throw new Error('Não foi enviado o nome da usuario');
        } else if(!usuario.email){
            throw new Error('Não foi enviado o email da usuario');
        } else if(!usuario.senha){
            throw new Error('Não foi enviado o senha da usuario');
        } else if(!usuario.senha){
            throw new Error('Não foi enviado o senha da usuario');
        }  

        return true
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(usuario, transaction) {
        this.VerficarUsuario(usuario)

        return repositorio.Add(usuario, transaction);
    }

    async Update(id, usuario) {
        if(!id) {
            throw new Error('Não foi enviada o identificador da usuario para alterar');
        } 
        this.VerficarUsuario(usuario)

        return repositorio.Update(id, usuario);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = ServicoUsuarios