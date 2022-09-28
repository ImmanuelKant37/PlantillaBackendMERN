

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

        //TODO: Validar jwt
        //TODO: Si el token no es valido desconectar
        //TODO: Saber que usuario está activo mediante el uuid
        //TODO: Emitir los usuarios conectados
        //TODO: unirme a una sala especifica Socket Join
        //TODO: Escuchar cuando un cliente manda un mensaje
        //TODO: manejar el Disconnect
        //TODO: Emitir los usuarios conectados
        });
    }


}


module.exports = Sockets;