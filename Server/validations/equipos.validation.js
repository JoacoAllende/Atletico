const equiposValidator = {};
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'TheSecretKey';
const equiposController = require('../controllers/equipos.controller');


equiposValidator.validar_getEquipos = (req, res) => {
    equiposController.getEquipos(req, res);
}

equiposValidator.validar_createEquipo = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            equiposController.createEquipo(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

equiposValidator.validar_updateEquipo = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            equiposController.updateEquipo(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

equiposValidator.validar_deleteEquipo = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            equiposController.deleteEquipo(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

module.exports = equiposValidator;