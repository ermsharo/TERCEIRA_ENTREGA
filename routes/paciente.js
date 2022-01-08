const express = require('express'); 
const router = express.Router(); 
const paciente = require('../models/paciente'); 


router.get('/test', (req, res) => {
    res.send("CHEGOU"); 
})



//add


router.post('/add', async (req, res)=> {


    let ourRequest = req.body; 
  


console.log("request here ",ourRequest)
 
    let nome =   ourRequest.NOME; 
    let telefone = ourRequest.TELEFONE; 
    let documento_registro =  ourRequest.DOCUMENTO_REGISTRO; 
console.log(nome, telefone, documento_registro);
    //Inserindo
    paciente.create(ourRequest)
    .then(() => {
       
        
        console.log("ADICIONADO COM SUCESSO" , res)
})
    .catch(err => console.log(err)); 


})

module.exports = router