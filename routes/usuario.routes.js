
/*
Rutes de Usuario /
host + /usuario/saldo
host + /usuario/transferencia

Rutes de indicadores
host + /usuario/indicador
*/


const { Router } = require('express');

const router = Router();

const {consultarSaldo,transferenciaUsuario} = require('../controllers/usuario');

const { consultaIndicador  } = require('../controllers/indicadores');

router.post('/saldo', consultarSaldo);

router.post('/transferencia', transferenciaUsuario);

router.get('/indicador', consultaIndicador);

module.exports = router;

