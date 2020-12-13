const Parametro = require('../models/Parametro')
const ws = function (io) {
    return require('../events/socket')(io)
}

exports.parametro = async (req, res) => {
    console.log(req.body)
    const parametro = new Parametro(req.body)
    parametro.createdAt = new Date()
    await parametro.save()
    ws.emit('update', req.body)
    res.json({
        status: 'parametro saved'
    })
}

exports.parametros = async (req, res) => {
    const parametros = await Parametro.find()
    res.json(parametros)
}