const opts = {
        descripcion: { //seria el --base del command
            demand: true, //obligatorio
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true, //valor por defecto
            desc: 'Tarea completada o pendiente'
        }

    }
    //como en este ejemplo las opciones son iguales se puede:

const argv = require('yargs')
    .command(['crear'], 'crear nota', {
        descripcion: { //seria el --base del command
            demand: true, //obligatorio
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        }
    })
    // .command(['listar'], 'mostrar todas las tareas por hacer', opts)
    .command(['actualizar'], 'actualizar tarea', opts)
    .command(['borrar'], 'borar tarea', {
        descripcion: { //seria el --base del command
            demand: true, //obligatorio
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        }
    })
    .command(['listar'], 'lista de  tareas')

.help()
    .argv;



module.exports = {
    argv
}