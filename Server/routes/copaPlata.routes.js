const express = require('express');
const router = express.Router();

const partidos = require("../validations/copaPlata.validation");

router.get('/copaPlata/:to/:a', partidos.validar_getPartidos);

module.exports = router;