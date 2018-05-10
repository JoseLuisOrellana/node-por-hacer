const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea pendiente de realizar', opts)
    .command('actualizar', 'Actualiza el estado de la tarea a completado', opts)
    .command('listar', 'Lista todo el contenido del archivo')
    .command('borrar', 'borra un registro del archivo', opts)
    .help()
    .argv;

module.exports = {
    argv
}