const { Schema, model } = require('mongoose');


const ListaSchema = Schema({


    lista: {
        type: [{
            clave : Number,
            valor : String
        }],
        default: undefined
    }
},{
    timestamps: true
});


ListaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Lista', ListaSchema );
