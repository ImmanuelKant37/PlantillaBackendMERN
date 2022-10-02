const { response } = require("express")
const FormGenerico = require("../models/formGenerico");


const crearForm = async (req, res=response) => {
    try {
        const {Codigo}= req.body;
        const Form = new FormGenerico(req.body);
      
        const existeCodigo= await FormGenerico.findOne({Codigo}); //Si existe
        if (existeCodigo){
            return res.status(400).json({
                ok:false,
                msg: 'El form ya existe'
            })
        }
        else{
        await Form.save(); //Funcion heredada de moongose Schema
        res.json({
            Form,
        })}

        }
        catch (error) {
            console.log(error)
            res.status(500).json({
                ok:false,
                msg: 'error en el servidor'
                })        
        }
}



const recuperarForm = async (req, res=response) => {
    try {
        
        const FormGenerico = require('../models/formGenerico')
       
   
    const findAll = await FormGenerico.find({  type: Object  }).limit
   
    res.json({
        findAll
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

const buscarForm = async (req, res=response) => {
    try {
        
    const FormGenerico = require('../models/formGenerico') 
    const {Codigo}= req.body;
    const find  =await FormGenerico.findOne({ Codigo:Codigo  })
   
    res.json({
        find
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

const actualizarForm = async (req, res=response) => {
    try {
        const {Codigo}= req.body;
        const existeCodigo= await FormGenerico.findOne({Codigo}); //Si existe
        if (existeCodigo){
           await FormGenerico.findOneAndUpdate({Codigo},req.body); //Funcion heredada de moongose Schema
           const form= await FormGenerico.find({Codigo});
           res.json({
             form,
            })
        }
        else{
            return res.status(400).json({
                ok:false,
                msg: 'El form no existe'
            })
        }

        }
        catch (error) {
            console.log(error)
            res.status(500).json({
                ok:false,
                msg: 'error en el servidor'
                })        
        }
}


const eliminarForm = async (req, res=response) => {
    try {
        const {Codigo}= req.body;
        const Form = new FormGenerico(req.body);
      
        const existeCodigo= await FormGenerico.findOne({Codigo}); //Si existe
        if (existeCodigo){
            await FormGenerico.findOneAndDelete({Codigo},req.body); //Funcion heredada de moongose Schema
            res.json({
                Form,
                ok:true,
                msg: 'Form eliminado'
            })
        }
        else{
            return res.status(400).json({
                ok:false,
                msg: 'El form no existe'
            })
        }

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
    actualizarForm,
    crearForm,
    recuperarForm,
    eliminarForm,
    buscarForm
}


