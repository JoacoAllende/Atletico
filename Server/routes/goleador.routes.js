const express = require('express');
const router = express.Router();

const goleadores = require("../validations/goleador.validation");

router.get('/goleadores/:to/:a', goleadores.validar_getGoleadores);
router.post('/goleadores/:to/:a', ensureToken, goleadores.validar_createGoleador);
router.put('/goleadores/:to/:a', ensureToken, goleadores.validar_updateGoleador);

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