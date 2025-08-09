const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const noticias = require("../validations/noticias.validation");
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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../noticias'));
    },
    filename: (req, file, cb) => {
        const uniqueName = 'noticia-' + Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

router.get('/noticias', noticias.validar_getNoticias);
router.get('/noticias/:id', noticias.validar_getNoticia);
router.post('/noticias', ensureToken, upload.single('imagen'), noticias.validar_createNoticia);
router.put('/noticias', ensureToken, upload.single('imagen'), noticias.validar_updateNoticia);
router.delete('/noticias/:id', ensureToken, noticias.validar_deleteNoticia);

module.exports = router;