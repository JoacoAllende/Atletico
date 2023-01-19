const noticiasValidator = {};
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'TheSecretKey';
const noticiasController = require('../controllers/noticias.contoller');

noticiasValidator.validar_getNoticias = (req, res) => {
    noticiasController.getNoticias(req, res);
}

module.exports = noticiasValidator;



