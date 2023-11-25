const equiposValidator = {};
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'TheSecretKey';
const equiposController = require('../controllers/equipos.controller');


equiposValidator.validar_getEquipos = (req, res) => {
    equiposController.getEquipos(req, res);
}

module.exports = equiposValidator;