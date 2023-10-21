const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const Atendimento = conexao.define('Atendimentos', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    data: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    concluido: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false
})

Atendimentos.belongsTo(Cachorros, {
    constraint: true,
    foreignKey: 'idAtendimentos'
})

Cachorros.hasMany(Atendimentos, {
    constraint: true,
    foreignKey: 'idAtendimento'
})

module.exports = Atendimento

