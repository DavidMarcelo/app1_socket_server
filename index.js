const express = require('express');
const path = require('path');
require('dotenv').config();

//App de express
const app = express();

//DEfinir un propio servidor de sockets (Clientes).
const server = require('http').createServer(app);
//de esta forma es como si exportaramos
//const io = require('socket.io')(server);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

//Definir el path publico
const publicPath = path.resolve( __dirname, 'public');

//le indicamos a la aplicacion de expres que haga uso del public path, cuando se realice una peticion
app.use( express.static(publicPath));

//En escucha servidor de forma local.
server.listen(process.env.PORT, (err) => {
    if(err) throw new Error(err);

    console.log('servido corriendo en puerto ', process.env.PORT);
});