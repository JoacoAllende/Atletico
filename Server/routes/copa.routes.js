const express = require('express');
const router = express.Router();

const partidos = require("../validations/copa.validation");

router.get('/copa/:copa/:to/:a', partidos.validar_getPartidos);
router.put('/copa/:copa/:to/:a', partidos.validar_editPartido);

module.exports = router;