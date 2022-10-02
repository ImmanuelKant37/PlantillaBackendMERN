const { Schema, model } = require('mongoose');


const FormSchema = Schema({
    Codigo:{type:Number, unique:true},
    NombreForm:{type: String},
    Titulo:{type:String},
    Descripcion:{type:String},
    CategoriaForm:{type: String},
    SubCategoria:{type:String},
    NivelDeAcceso:{type:Number},
    URL: {type:String}
},{
    timestamps: true
});


FormSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Form', FormSchema );
