const express = require('express');
const app = express();

app.listen(5000, () => console.log('Server corriendo en http://localhost:5000'));

//refiero al motor de plantilla EJS
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Especifico para que use el enrutador
app.use('/', require('./router'));

//defino ruta de prueba
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

