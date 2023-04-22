require('dotenv').config()
const express = require('express')
const hbs = require('hbs');

const app = express()
const port =process.env.PORT



//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use( express.static('public') );

app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Martín Velarde',
        titulo: 'Curso Node'
    });
});
app.get('/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Martín Velarde',
        titulo: 'Curso Node'
    });
});
app.get('/generic', (req,res) => {
    res.render('generic', {
        nombre: 'Martín Velarde',
        titulo: 'Curso Node'
    });
});



app.listen(port, ()=>{

    console.log(`Lisenting http://localhost:${port}`)
    
});