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

module.exports = Cachorro

