const express = require('express');
const router = express.Router();

const tarjetas = require("../validations/tarjeta.validation");

router.get('/tarjetas/:to/:a', ensureToken, tarjetas.validar_getTarjetas);
router.put('/tarjetas/:to/:a', ensureToken, tarjetas.validar_editTarjetas);

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