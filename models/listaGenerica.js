const { Schema, model } = require('mongoose');


const ListaSchema = Schema({


    Lista: [{
        Clave:{type: Schema.Types.Number,
        ref: 'Clave'}
    },{Valor:{
        type: Schema.Types.String,
        ref: 'Valor'}
    }]
},{
    timestamps: true
});


ListaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Lista', ListaSchema );
