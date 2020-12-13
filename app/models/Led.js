const mongoose = require('mongoose')
const { Schema } = mongoose

const Led = new Schema({
    ledStatus: Boolean,
    createdAt: Date
})

module.exports = mongoose.model('Led', Led)