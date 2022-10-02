const { Schema, model } = require('mongoose');


const PerfilSchema = Schema({
    Codigo:{type:Number, unique:true},
    NombrePerfil:{type: String},
    Titulo:{type:String},
    Descripcion:{type:String},
    CategoriaPerfil:{type: String},
    SubCategoria:{type:String},
    NivelDeAcceso:{type:Number},
    Items:{type:Array},
    Activo:{type:String},
    Estilo:{type:Array},
    URL: {type:String},
    Imagen:{type:String}
},{
    timestamps: true
});


PerfilSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Perfil', PerfilSchema );
