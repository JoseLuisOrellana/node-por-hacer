const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('======== Por Hacer ========'.blue);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('==========================='.blue);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log('Se actualizo correctamente');
        } else {
            console.log('No se pudo actualizar registro');
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion, argv.completado);
        if (borrado) {
            console.log('Registro borrado correctamente');
        } else {
            console.log('No se pudo borrar registro');
        }
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}