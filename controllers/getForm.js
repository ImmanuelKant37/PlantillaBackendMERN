const { response } = require("express")
const FormGenerico = require("../models/formGenerico");


const crearForm = async (req, res=response) => {
    try {
        const {Codigo}= req.body;
        const Form = new FormGenerico(req.body);
      
        const existeCodigo= await Form.findOne({Codigo}); //Si existe
        if (existeCodigo){
            return res.status(400).json({
                ok:false,
                msg: 'El form ya existe'
            })
        }
        else{
        await FormGenerico.save(); //Funcion heredada de moongose Schema
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
       
   
    const findAll  =await FormGenerico.find({  type: Object  })
   
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



module.exports= {
    crearForm,
    recuperarForm
}


