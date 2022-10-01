const { Schema, model } = require('mongoose');


const ListaSchema = Schema({

    NombreLista:{type: String},
    Lista: [{
        type: Schema.Types.String,  ref: 'Valor'
    }]
},{
    timestamps: true
});


ListaSchema.method('toJSON', function() {
    const { __v, Lista, ...object } = this.toObject();
    return object;
});

module.exports = model('Lista', ListaSchema );
