const { Schema, model } = require('mongoose');


const ListaSchema = Schema({


    Lista: [{
        clave: Number,
        valor: String
    }]
},{
    timestamps: true
});


ListaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Lista', ListaSchema );
