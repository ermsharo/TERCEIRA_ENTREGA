const express = require('express'); 
const router = express.Router(); 
const consulta = require('../models/consulta'); 


router.get('/test', (req, res) => {
    res.send("CHEGOU"); 
})

//add

router.get('/all',  async (req, res) => {

    const allConsultas = await consulta.findAll();
    console.log(allConsultas);
    res.send(allConsultas); 
})

router.get('/paciente',  async (req, res) => {

    const allConsultas = await consulta.findAll();
    console.log(allConsultas);
    res.send(allConsultas); 
})

router.get('/medico',  async (req, res) => {

    const allConsultas = await consulta.findAll();
    console.log(allConsultas);
    res.send(allConsultas); 
})


router.post('/add', async (req, res)=> {


    let ourRequest = req.body; 
  


console.log("request here ",ourRequest)
 

    //Inserindo
    consulta.create(ourRequest)
    .then(() => {
       
        
        console.log("ADICIONADO COM SUCESSO" , res)
})
    .catch(err => console.log(err)); 


})

module.exports = router