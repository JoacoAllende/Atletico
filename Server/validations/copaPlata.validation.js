const copaPlataValidator = {};

const copaPlataController = require('../controllers/copaPlata.controller');

copaPlataValidator.validar_getPartidos = (req, res) => {
    copaPlataController.getPartidos(req, res);
}

module.exports = copaPlataValidator;