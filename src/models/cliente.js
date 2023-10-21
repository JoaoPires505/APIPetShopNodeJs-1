const { DataTypes } = require('sequelize')
const conexao = require('../database.js');
const Cachorro = require('./cachorro.js');

const Cliente = conexao.define('clientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
    }
}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.belongsTo(Cliente, { foreignKey: 'id', allowNull: false });
Cliente.hasMany(Cachorro, { foreignKey: 'id' });



module.exports = Cliente