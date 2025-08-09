const noticiasController = {};
const path = require('path');
const fs = require('fs');
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
    const nuevaImagen = req.file ? req.file.filename : null;

    const selectQuery = `SELECT imagen FROM noticias WHERE id = ?`;
    mysqlConnection.query(selectQuery, [id], (selectErr, results) => {
        if (selectErr) {
            return res.json(selectErr.errno);
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Not finded' });
        }

        const imagenAnterior = results[0].imagen;

        if (nuevaImagen && imagenAnterior) {
            const rutaImagen = path.join(__dirname, '../noticias', imagenAnterior);
            fs.access(rutaImagen, fs.constants.F_OK, (err) => {
                if (!err) {
                    fs.unlink(rutaImagen, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error('Error on update:', unlinkErr);
                        }
                    });
                }
            });
        }
        const query = `
            UPDATE noticias
            SET titulo = ?, cuerpo = ?, ${nuevaImagen ? 'imagen = ?,' : ''} fecha = ?
            WHERE id = ?
        `;

        const params = nuevaImagen
            ? [titulo, cuerpo, nuevaImagen, fecha, id]
            : [titulo, cuerpo, fecha, id];

        mysqlConnection.query(query, params, (updateErr) => {
            if (!updateErr) {
                res.json({ status: 'updated' });
            } else {
                res.json(updateErr.errno);
            }
        });
    });
};

noticiasController.deleteNoticia = (req, res) => {
    const id = req.params.id;
    const selectQuery = `SELECT imagen FROM noticias WHERE id = ?`;
    mysqlConnection.query(selectQuery, [id], (selectErr, results) => {
        if (selectErr) {
            return res.json(selectErr.errno);
        }
        const imagen = results[0]?.imagen;
        if (imagen) {
            const rutaImagen = path.join(__dirname, '../noticias', imagen);
            fs.access(rutaImagen, fs.constants.F_OK, (err) => {
                if (!err) {
                    fs.unlink(rutaImagen, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error('Error on  delete:', unlinkErr);
                        }
                    });
                }
            });
        }
        const deleteQuery = `DELETE FROM noticias WHERE id = ?`;
        mysqlConnection.query(deleteQuery, [id], (err) => {
            if (!err) {
                res.json({ status: 'deleted' });
            } else {
                res.json(err.errno);
            }
        });
    });
};

module.exports = noticiasController;
