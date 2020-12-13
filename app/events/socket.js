let parametros = []
let USERS = {}

module.exports = function (io) {
    io.on('connection', (socket) => {
        // connect
        console.log(`${socket.id} was connected`)
        USERS[socket.id] = socket

        // send
        socket.on('send', (data) => {
            parametros.push(data)
            console.log(parametros)
        })

        // disconnect
        socket.on('disconnect', () => {
            console.log(`${socket.id} was disconnected`)
        })

    })

    
}

// // Live update package
// setInterval(() => {
//     // TOOD SEND PACKAGE
//     for (let i in USERS) {
//         USERS[i].emit('update', parametros)
//     }
    
// }, 1000 / 25)