const copaValidator = {};

const copaController = require('../controllers/copa.controller');

copaValidator.validar_getPartidos = (req, res) => {
    copaController.getPartidos(req, res);
}

copaValidator.validar_editPartido = (req, res) => {
    copaController.editPartido(req, res);
}

module.exports = copaValidator;