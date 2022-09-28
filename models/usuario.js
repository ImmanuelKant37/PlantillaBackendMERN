const {Schema, model} = require('mongoose')
//El schema hereda las funciones para mongoose
const UsuarioSchema = Schema({
    //Columnas de las entidades
    nombre:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    
    online:{
        type:Boolean,
        default:false
    },
})

UsuarioSchema.method('toJSON', function(){
    const{ __v, _id, password, ...object}= this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Usuario', UsuarioSchema)