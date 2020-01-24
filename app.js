//importar el yargs y el color
//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;


const porHacer = require('./por-hacer/por-hacer')


//console.log('configuracion del yargs', argv);
let comando = argv._[0];
//console.log(comando);

switch (comando) {
    case 'crear':
        console.log('crear nota');
        //console.log(crear(argv.descripcion));
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);


        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log("=============Por Hacer ==================".green);
            console.log('Tarea: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("=========================================".green);

        }



        break;
    case 'actualizar':
        console.log('actualizar tarea o lista');
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);


        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        //        console.log(borrado);

        console.log(borrado);
        break;


    default:
        console.log('no eligio una opcion');



}