const descripcion = {
    demand: true, //obligatorio
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true, //valor por defecto
    desc: 'Tarea completada o pendiente'
}


//como en este ejemplo las opciones son iguales se puede:

const argv = require('yargs')
    .command(['crear'], 'crear nota', { descripcion })
    .command(['actualizar'], 'actualizar tarea', { descripcion, completado })
    .command(['borrar'], 'borrar tarea', { descripcion })
    .command(['listar'], 'lista de  tareas')

.help()
    .argv;



module.exports = {
    argv
}