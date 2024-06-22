const express = require('express');

const router = express.Router();

const pool = require('./database/db');

//Ruta para mostrar registros (GET)
router.get('/', (req, res) => {
    //res.render('index', {var1: 'hola', var2: ' mundo'});
    pool.query('SELECT * FROM users', (err, results) => {
        if (err) {
            throw err;
        }
        res.render('index', {results: results});
    })
})

//Ruta para insertar registros (GET)
router.get('/create', (req, res) => {
    res.render('create');
})

//Ruta para editar registros (PUT)
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            throw err;
        }
        res.render('edit', {user: results[0]});
    })
})

//Ruta para borrar registros (DELETE)
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            throw err;
        }
        res.redirect('/');
    })
})


const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);


module.exports = router;
