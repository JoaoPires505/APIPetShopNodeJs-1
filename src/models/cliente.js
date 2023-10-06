const { DataTypes } = require('sequelize');
const conexão = require('../database.js');

const Cliente = conexão.define('clientes', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type : DataTypes.INTEGER,
    },
    nome:{
        type : DataTypes.STRING,
        allowNull: false,
    },
    telefone:{
        type : DataTypes.STRING,
        allowNull: false,
    }, 
     
    
},{
    createdAt: false,
    updatedAt: false,
});

module.exports = Cliente;