const Sequelize  = require('sequelize');
const database = require('../db/connection');
 
const especialidade = database.define('especialidade', {
    NOME: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    PORCENTAGEM: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CODIGO: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
    },
})
 
module.exports = especialidade; 