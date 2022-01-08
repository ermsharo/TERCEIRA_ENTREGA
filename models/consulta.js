const Sequelize  = require('sequelize');
const database = require('../db/connection');
 
const consultas = database.define('consultas', {
    PACIENTE: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ESPECIALIDADE: {
        type: Sequelize.STRING,

    },
    MOMENTO_INICIO: {
        type: Sequelize.STRING,
        allowNull: false
    },
    MOMENTO_FIM: {
        type: Sequelize.STRING,
        allowNull: false
    },
    RELATORIO_CONSULTA: {
        type: Sequelize.NUMBER,
        allowNull: false

    },
    VALOR: {
        type: Sequelize.NUMBER,
        allowNull: false
    },

    PREFERENCIA_MEDICO_PACIENTE: {
        type: Sequelize.STRING,
        allowNull: false
    },



    ID_CONSULTA: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
        
    },


    
})
 
module.exports = consultas; 