var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Mi primera appi');
});

app.get('/saludo', function (req, res) {
    res.send('Hola mundo');
});

app.get('/despedida', function (req, res) {
    res.send('Adios mundo cruel');
});

app.get('/despedida/familia', function (req, res) {
    res.send('Les quiero mucho a todos');
});

app.get('/despedida/empleados', function (req, res) {
    res.send('Ojala se rompan una pierna');
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});

