const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargaDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargaDB();
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargaDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB();
        return true
    } else {
        return false
    }

}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            console.log('Archivo NO creado')
        else
            console.log('Archivo Creado')
    });
}

const cargaDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []
    }
}

const borrar = (descripcion) => {
    cargaDB();
    let index = listadoPorHacer.findIndex(d => d.descripcion === descripcion)

    if (index >= 0) {
        let a = listadoPorHacer.splice(index, 1)
        guardarDB()
        return true
    } else {
        return false
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}