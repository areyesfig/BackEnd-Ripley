const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

app.use(express.json());


//Rutas
app.use('/usuario' , require('./routes/usuario.routes'));

module.exports = app;