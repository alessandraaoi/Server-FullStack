const express = require('express');
const cors = require('cors');
require ('dotenv').config();

// importo la conexión a mi base de datos en MONGODB
const db = require('./database/db')

// importo el controlador de rutas con las rutas de la API
// const routes = require('./router/routes')

const controllers = require('./controller/app')

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json('Haciendo get en /')
})

app.get('/user/:userId', controllers.getUser);
app.get('/anuncio/:userId', controllers.getAnuncio); // id usuario
app.get('/anuncio/:id', controllers.getOne) // id anuncio

// app.post('/register', controllers.register);

app.put('/anuncio/:id', controllers.updateA) // id anuncio

app.post('/login', controllers.login);

// app.use('/login', routes); 

// app.use('/', (req, res) => console.log('Bienvenido!'));

app.listen(process.env.PORT, () => 
{console.log('Started server')
db()} ) 

module.exports = app;