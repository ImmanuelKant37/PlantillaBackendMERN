const { response } = require("express")
const Usuario      = require('../models/usuario')
const bcrypt       = require ('bcryptjs');
const { generarJWT } = require("../helpers/jwt");
const listaGenerica = require("../models/listaGenerica");

const crearUsuario = async(req, res = response) =>{
 try {
    const {email,password}= req.body;
    //Verificar que el email no exista
    const existeEmail= await Usuario.findOne({email}); //Si existe
    if (existeEmail){
        return res.status(400).json({
            ok:false,
            msg: 'El correo ya existe'
        })
    }
    //GUARDAR USUARIO EN BD
    const usuario = new Usuario(req.body);
 
    // ENCRIPTAR CONTRASEÑA
    const salt =  bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password,  salt); //Intercambio el password por un crypt

    //GENERAR JWT
    const token = await generarJWT(usuario.id)
    await usuario.save(); //Funcion heredada de moongose Schema
    res.json({
        usuario,
        token
    })
 } catch (error) {
    console.log(error)
    res.status(500).json({
        ok:false,
        msg: 'error en el servidor'
        })        
    }

}

const login = async(req, res ) =>{
      const {email, password} = req.body;
    try {
        const usuarioDB = await  Usuario.findOne({email})
        if (!usuarioDB){
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            })
        }
        //Validar el password
        const validPassword = bcrypt.compareSync(password,usuarioDB.password);
        if (!validPassword){
            return res.status(400).json({
                ok:false,
                msg: 'Password incorrecto'
            });
        }
        //Genero JWT
        const token = await generarJWT(usuarioDB.id);
        res.json({
            ok:true,
            usuario:usuarioDB,
            token
        })
        } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Datos invalidos'
            })        
    }
      
}

const renewToken = async(req, res) =>{

    const uid = req.uid;
    const token =await generarJWT (uid);
    //Obtener usuario por UID
    const usuario = await  Usuario.findById(uid);
    res.json({
        ok:true,
        usuario,
        token,
    })
}
const crearLista = async (req, res=response) => {
    try {
        const {clave,valor}= req.body;
        const lista = new listaGenerica(req.body);
        const token = await generarJWT(clave)
    await usuario.save(); //Funcion heredada de moongose Schema
    res.json({
        lista,
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

module.exports= {
    crearUsuario,
    login,
    renewToken,
    crearLista
}


