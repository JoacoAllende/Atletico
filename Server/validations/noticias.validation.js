const noticiasValidator = {};
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'TheSecretKey';
const noticiasController = require('../controllers/noticias.contoller');

noticiasValidator.validar_getNoticias = (req, res) => {
    noticiasController.getNoticias(req, res);
}

noticiasValidator.validar_createNoticia = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            noticiasController.createNoticia(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

noticiasValidator.validar_updateNoticia = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            noticiasController.updateNoticia(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

noticiasValidator.validar_deleteNoticia = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            noticiasController.deleteNoticia(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

module.exports = noticiasValidator;



