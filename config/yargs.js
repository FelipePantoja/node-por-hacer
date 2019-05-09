const opts = {
    descripcion: {
        alias: 'd',
        desc: 'Descripcion de tarea',
        demand: true
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea Algo', opts)
    .command('actualizar', 'actualiza algo', opts)
    .command('borrar', 'borra algo', opts)
    .help()
    .argv;

module.exports = {
    argv
}