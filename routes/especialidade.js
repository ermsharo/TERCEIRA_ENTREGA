const express = require('express'); 
const router = express.Router(); 
const especialidade = require('../models/especialidade'); 


router.get('/test', (req, res) => {
    res.send("CHEGOU"); 
})

//add

router.get('/all',  async (req, res) => {

    const allEspecialidades = await especialidade.findAll();
    console.log(allEspecialidades);
    res.send(allEspecialidades); 
})


router.post('/add', async (req, res)=> {


    let ourRequest = req.body; 
  


console.log("request here ",ourRequest)
 
    let nome =   ourRequest.NOME; 
    let porcentagem = ourRequest.PORCENTAGEM; 
    let codigo =  ourRequest.CODIGO; 

    //Inserindo
    especialidade.create(ourRequest)
    .then(() => {
       
        
        console.log("ADICIONADO COM SUCESSO" , res)
})
    .catch(err => console.log(err)); 


})

module.exports = router