const Sequelize  = require('sequelize');
const database = require('../db/connection');
 
const Paciente = database.define('paciente', {
    NOME: {
        type: Sequelize.STRING,
        allowNull: false,
       
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
 
module.exports = Paciente;