//estara toda la logica de la app
//USAREMOS EL FILE SYSTEM//requireds hay tres tipos de require
const fs = require('fs'); //es de una libreria propia de node
var Color = require('colors');
//las notas las almacenaremos en un arreglo, para poder listarlas

let listadoPorHacer = [];
let listadoPorHacerDB = [];


//funcion guardar
let guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, function(err) {
        if (err) throw new Error('no se pudo grabar', err);
        //   console.log('Tarea grabada');
    });
}
let cargarDb = () => {
    ///como estamos del lado del servidor se lo puede llamar con solo un require
    //y al detectar que es un archivo json automaticamente lo serializa

    //si el archivo esta vacio el require da error entonces:
    try {
        listadoPorHacer = require('../db/data.json');
        // console.log(listadoPorHacer);

    } catch (error) {
        let listadoPorHacer = []; //lo inicializa
    }



}

//funcion crear
const crear = (descripcion) => {
    /*return new Promise((resolve, reject) => {

    });*/

    let porHacer = {
        descripcion, //esto es igual a la prop de porHacer = a descripcion parametro descripcion=descripcion
        completado: false
    };
    cargarDb();
    listadoPorHacer.push(porHacer);

    guardarDb();

    //hacerlo persistente en un archivo
    // fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) 

    return porHacer;
};

const getListado = () => {
    cargarDb();
    return listadoPorHacer;



}

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    //recorremos la lista para buscar la que hay que actualizar
    //usaremos la funcion de javascript findindex de arreglos
    let index = listadoPorHacer.findIndex((tarea) => { //tarea es el cada item del listado
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true; //para chequear que se actualizo bien

    } else {
        return false;

    }
}
const borrar = (descripcion) => {


    cargarDb();

    let listadoPorHacerBorrado = listadoPorHacer.filter(function(e) {
        return e.descripcion !== descripcion;
    });
    if (listadoPorHacer.length !== listadoPorHacerBorrado.length) {
        listadoPorHacer = listadoPorHacerBorrado;
        guardarDb();
        return true;
    } else {
        return false;
    }



}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}