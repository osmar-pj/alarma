const mongoose = require('mongoose')
const { Schema } = mongoose

const Parametro = new Schema({
    puerta_peq: Number,
    puerta_gra: Number,
    pir: Number,
    createdAt: Date
})

module.exports = mongoose.model('Parametro', Parametro)