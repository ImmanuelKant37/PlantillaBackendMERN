const { generarJWT } = require("../helpers/jwt");
const { response } = require("express")
const listaGenerica = require("../models/listaGenerica");


const crearLista = async (req, res=response) => {
    try {
        const {NombreLista, Lista}= req.body;
        const ListaGenerica = new listaGenerica(req.body);
        const token = await generarJWT(NombreLista)
    await ListaGenerica.save(); //Funcion heredada de moongose Schema
    console.log("NombreLista:", NombreLista,"Lista", Lista,"Req.body",req.body)
    res.json({
        Lista,
        ListaGenerica,
        token
    })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'error en el servidor'
            })        
    }
}



const recuperarLista = async (req, res=response) => {
    try {
        
        const ListaGenerica = require('../models/listaGenerica')
       
   
    const findBy  =await ListaGenerica.find({  type: Array  })
    res.json({
        findBy
    })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'error en el servidor'
            })        
    }
}



module.exports= {
    crearLista,
    recuperarLista
}


