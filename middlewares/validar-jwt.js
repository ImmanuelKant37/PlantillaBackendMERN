const jwt = require('jsonwebtoken')
const validarJWT =(req,res,next) =>{
try {
    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok:false,
            msj:"No hay token"
        })
    }
    const uid = jwt.verify(token, process.env.JWT_KEY)
   
    req.uid = uid; //Envio al request si el token verifica
    next();
} catch (error) {
    res.status(401).json({
        ok:false,
        msg:"Token no valido"
    })
}
}

module.exports = {
    validarJWT
}