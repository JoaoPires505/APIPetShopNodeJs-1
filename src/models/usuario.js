const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const Usuario = conexao.define('usuarios', {
    async Adicionar(usuario){
        const senha = await bcrypt.hash(usuario,senha, 10)
        
        return Usuario.create({...usuario, senha })
    },
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permissao: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false
})

Clientes.belongsTo(Usuarios, { 
    constraint: true, 
    foreignKey: 'idUsuarios'
})


module.exports = Usuario

