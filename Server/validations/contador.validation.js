const contadorValidator = {};
const contadorController = require('../controllers/contador.controller');

contadorValidator.validar_updateContador = (req, res) => {
    contadorController.updateContador(req, res);
}

module.exports = contadorValidator;