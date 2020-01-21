const vallaInvictaValidator = {};
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'TheSecretKey';
const vallaInvictaController = require('../controllers/vallaInvicta.controller');

vallaInvictaValidator.validar_getVallaInvicta = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            vallaInvictaController.getVallaInvicta(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

module.exports = vallaInvictaValidator;