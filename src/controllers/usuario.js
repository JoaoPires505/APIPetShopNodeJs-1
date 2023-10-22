const ServicoUsuario = require("../services/usuario.js")

const servico = new ServicoUsuario()

class ControllerUsuario {

    async Login(req, res) {
        const { email, senha } = req.body;

        const { dataValues: pessoa } = await servico. PegarUmPorEmail(email);
        if (!pessoa) {
        return res.status (401).json({ mensagem: 'Credenciais inválidas' });
        }
        console.log(pessoa.senha, senha)
        if (!(await bcrypt.compare(senha, pessoa.senha))) {
        return res.status (401).json({ mensagem: 'Credenciais inválidas' });
        }
        const token = jwt.sign(
        { id: pessoa.id, nome: pessoa.nome, email: pessoa.email }, 
        config.secret
        )
        res.json({ mensagem: "Login bem-sucedido", token });
        
        if(usuario == admin){
            console.log("Você pode cadastrar funcionários")
        }
    }
        
    
    async PegarUm(req, res){
        try {
            console.log(req.params.id)
            const result = await servico.PegarUm(req.params.id)
            res.status(200).json({
                usuario: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
    
    async PegarTodos(_, res){
        try {
            const result = await servico.PegarTodos()
            res.status(200).json({
                usuarios: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res){
        try {
            const result = await servico.Add(req.body.usuario)
            res.status(201).json({
                usuario: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Update(req, res){
        try {
            const result = await servico.Update(req.params.id, req.body.usuario)
            res.status(200).json({
                usuario: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Delete(req, res){
        try {
            await servico.Delete(req.params.id)
            res.status(204)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerUsuario