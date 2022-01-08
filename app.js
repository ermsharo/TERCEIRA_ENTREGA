const express = require('express');
const app = express();
const db = require('./db/connection'); 
const bodyParser = require('body-parser'); 
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = 4000;
const cors = require('cors')



app.use(cors())
app.listen(PORT, function(){
console.log(` O Express esta rodando na porta ${PORT}`)
});

//Body parser 
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
app.engine('.handlebars', exphbs.engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

//handlebars
app.set('views', path.join(__dirname,'views'))

//Static folder
app.use(express.static(path.join(__dirname, 'public')));


//Conectando com o nosso banco de dados
db
 .authenticate()
 .then(()=>{
     console.log("Conectou ao banco de dados com sucesso")
 })
 .catch(err =>{
     console.log("ERRO DE CONEXAO", err); 
 })





app.get('/',(req,res)=> {
    res.render("index");
});

app.use('/paciente', require('./routes/paciente'));
app.use('/especialidade', require('./routes/especialidade'));
app.use('/medico', require('./routes/medico'));
app.use('/consulta', require('./routes/consulta'));