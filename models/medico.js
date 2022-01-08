const Sequelize  = require('sequelize');
const database = require('../db/connection');
 
const medico = database.define('medico', {
    NUMERO_REGISTRO: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    NOME: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ESPECIALIDADE: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PORCENTAGEM: {
        type: Sequelize.NUMBER,
        allowNull: false

    },
    REGISTRO_CLINICA: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
})
 
module.exports = medico; 