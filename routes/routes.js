//Cargue la conexión del frupo MySQL
//const { request, response } = require('express');
const pool = require('../data/config');

//Ruta de la app
const router = app => {
    //Mostrar mensaje de bienvenida en root
    app.get('/', (request, response) => {
        response.send({
            message: 'Bienvenido a Node.js Express REST API'
        });
    });

    //Mostrar todos los usuarios
    app.get('/users', (request, response) => {
        pool.query('SELECT * FROM users', 
        (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    //Mostrar un solo usuario por ID
    app.get('/users/:id', (request, response) => {
        const id = request.params.id;

        pool.query('SELECT * FROM users WHERE idusers = ?', id, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    //Agregar un nuevo usuario
    app.post('/users', (request, response) => {
        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.status(201).send(`User added with ID: ${result.insertID}`);
        });
    });

    //Actualizar un usuario existente
    app.put('/users/:id', (request, response) => {
        const id = request.params.id;

        pool.query('UPDATE users SET ? WHERE idusers = ?', [request.body[0], id], (error, result) => {
            if (error) throw error;

            response.send('User updated successfully');
        });
    });

    //Eliminar un usuario
    app.delete('/users/:id', (request, response) => {
        const id = request.params.id;

        pool.query('DELETE FROM users WHERE idusers = ?', id, (error, result) => {
            if (error) throw error;

            response.send('User deleted');
        });
    });

    //----------------------------------------------------------------------Productos
    //Mostrar todos los productos
    app.get('/products', (request, response) => {
        pool.query('SELECT * FROM products', 
        (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    //Mostrar un solo producto por ID
    app.get('/products/:id', (request, response) => {
        const id = request.params.id;

        pool.query('SELECT * FROM products WHERE idproduct = ?', id, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    //Agregar un nuevo producto
    app.post('/products', (request, response) => {
        pool.query('INSERT INTO products SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.status(201).send(`Product added with ID: ${result.insertID}`);
        });
    });
    
    //Actualizar un producto existente
    app.put('/products/:id', (request, response) => {
        const id = request.params.id;

        pool.query('UPDATE products SET ? WHERE idproduct = ?', [request.body[0], id], (error, result) => {
            if (error) throw error;

            response.send('Product updated successfully');
        });
    });

    //Eliminar un producto
    app.delete('/products/:id', (request, response) => {
        const id = request.params.id;

        pool.query('DELETE FROM products WHERE idproduct = ?', id, (error, result) => {
            if (error) throw error;

            response.send('Product deleted');
        });
    });
    //----------------------------------------------------------------------/Productos

    //----------------------------------------------------------------------Ventas
    

    //----------------------------------------------------------------------/Ventas
}

//Exportar el router
module.exports = router;