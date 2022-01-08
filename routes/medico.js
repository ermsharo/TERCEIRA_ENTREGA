const express = require('express'); 
const router = express.Router(); 
const medico = require('../models/medico'); 


router.get('/test', (req, res) => {
    res.send("CHEGOU"); 
})



//add

router.get('/all',  async (req, res) => {

    const allMedicos = await medico.findAll();
    console.log(allMedicos);
    res.send(allMedicos); 
})


router.post('/add', async (req, res)=> {


    let ourRequest = req.body; 
  


console.log("request here ",ourRequest)

    //Inserindo
    medico.create(ourRequest)
    .then(() => {
       
        
        console.log("ADICIONADO COM SUCESSO" , res)
})
    .catch(err => console.log(err)); 


})

module.exports = router