const noticiasController = {};

const mysqlConnection = require('../database');

noticiasController.getNoticias = async (req, res, next) => {
    const query = `SELECT * FROM noticias ORDER BY fecha DESC, id DESC;`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

noticiasController.getNoticia = async (req, res, next) => {
    const id = req.params.id;
    const query = `SELECT * FROM noticias WHERE id = ${id};`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

noticiasController.createNoticia = (req, res) => {
    const { titulo, cuerpo, fecha } = req.body;
    const imagen = req.file ? req.file.filename : null;
    const query = `INSERT INTO noticias (titulo, cuerpo, imagen, fecha) VALUES (?, ?, ?, ?)`;
    mysqlConnection.query(query, [titulo, cuerpo, imagen, fecha], (err) => {
        if(!err) {
            res.json({
                'status' : 'created'
            })
        } else {
            res.json(err.errno);
        }
    })
};

noticiasController.updateNoticia = (req, res) => {
    const { id, titulo, cuerpo, fecha } = req.body;
    const imagen = req.file.filename;

    const query = `
        UPDATE noticias
        SET titulo = ?, cuerpo = ?, imagen = ?, fecha = ?
        WHERE id = ?
    `;

    mysqlConnection.query(query, [titulo, cuerpo, imagen, fecha, id], (err) => {
        if (!err) {
            res.json({
                'status': 'updated'
            });
        } else {
            res.json(err.errno);
        }
    })
}

noticiasController.deleteNoticia = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM noticias WHERE id = ${id};`
    mysqlConnection.query(query, (err) => {
        if (!err) {
            res.json({
                'status': 'updated'
            });
        } else {
            res.json(err.errno);
        }
    })
}

module.exports = noticiasController;
