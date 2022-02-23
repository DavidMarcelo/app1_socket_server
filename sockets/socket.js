const { io } = require('../index');

//Mensajes de sockets
io.on('connection', client => {//El client va hacer una computadora que se conecte el socket server, cuando yo me conecte entra a ese cliente.
    console.log("Cliente conectado!!!");
    client.on('disconnect', () => { 
        console.log("Cliente desconectado!!!");
    });//Este callback se dispara cuando dicho cliente se desconecte.

    //On es para escuchar, en este caso el mensaje que tiene que ser igual al que se le envia
    client.on('mensaje', (payload) => {
        console.log("Mensaje!!", payload);
        //io es todo el servidor, mientras cliente son solo clientes especificos.
        io.emit('mensaje', { admin: "nuevo mensaje!!"});
    });
});