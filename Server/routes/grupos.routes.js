const express = require('express');
const router = express.Router();

const grupo = require("../validations/grupo.validation");

router.get('/grupos/:to/:a', grupo.validar_getGrupos);
router.put('/grupos/:to/:a', ensureToken, grupo.validar_editPartido);

function ensureToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = router;