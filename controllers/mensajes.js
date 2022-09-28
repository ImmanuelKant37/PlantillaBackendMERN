const Mensaje = require("../models/mensaje");

const obtenerChat = async(req,res) =>{

    var miId =  toString(req.uid);
    var mensajesDe =  toString(req.params.de);
  /*
    const mensaje = new Mensaje(req.body);
    await mensaje.save();*/
    const last = await Mensaje.find({
        $or:[
            {de:miId, para: mensajesDe},
            {de:mensajesDe, para: miId}
        ]
    }).sort({ createdAt:'desc'}).limit(30);
    res.json({
        ok:true,
        mensajes: last
        
       
    })
}

module.exports = {
    obtenerChat
}