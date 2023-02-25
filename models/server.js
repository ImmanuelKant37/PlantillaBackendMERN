// Servidor de Express
const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const cors = require('cors');
const Sockets  = require('./sockets');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {

        this.app  = express();
        this.port =process.env.PORT || 5000;

        //Conectar a DB
        dbConnection();
        //Test2
        // Http server
        this.server = http.createServer( this.app );
        
        // Configuraciones de sockets
        this.io = socketio( this.server, { /* configuraciones */ } );
    }

    middlewares() {
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
        var whitelist = ['https://gestorproyectos.netlify.app', 'http://localhost:5001/']
        var corsOptionsDelegate = function (req, callback) {
          var corsOptions;
          if (whitelist.indexOf(req.header('Origin')) !== -1) {
            corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
          } else {
            corsOptions = { origin: false } // disable CORS for this request
          }
          callback(null, corsOptions) // callback expects two parameters: error and options
        }
         
        this.app.get('/api/post', cors(corsOptionsDelegate), function (req, res, next) {
          res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
          console.log("getApiPost")
        })
         
    
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            next();
            console.log("Check CROSS")
          });
        //Parseo del body 
        this.app.use(express.json());
        // API: ENDPOINTS
        this.app.use('/api/login', require('../router/auth'));
        this.app.use('/api/mensajes', require('../router/mensajes'));
      //  this.app.use('/api/get', require('../router/form'));
        this.app.use('/api/post', require('../router/form'));

    }

    // Esta configuración se puede tener aquí o como propieda de clase
    // depende mucho de lo que necesites
    configurarSockets() {
        new Sockets( this.io );
    }

    execute() {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar sockets
        this.configurarSockets();

        // Inicializar Server
        this.server.listen( (process.env.PORT || 5000), () => {
            console.log('Server corriendo en puerto:', this.port );
        });
    }

}


module.exports = Server;