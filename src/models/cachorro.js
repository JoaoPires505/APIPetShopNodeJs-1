const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const Cachorro = conexao.define('Cachorros', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false
})

Cachorros.belongsTo(Cliente, {
    constraint: true,
    foreignKey: 'idClientes'
})

Cliente.hasMany(Cachorros, {
    constraint: true,
    foreignKey: 'idClientes'
})

module.exports = Cachorro

