const { Schema, model } = require('mongoose');


const ListaSchema = Schema({


    Lista: [{
        Clave:{type: Schema.Types.Number,  ref: 'Clave'}
      , Valor:{type: String,               ref: 'Valor'}
    }]
},{
    timestamps: true
});


ListaSchema.method('toJSON', function() {
    const { __v, Lista, ...object } = this.toObject();
    return object;
});

module.exports = model('Lista', ListaSchema );
