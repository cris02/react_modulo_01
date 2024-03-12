// -------------------------------- PROMESAS --------------------------------

import getHeroeById from "./bases/exportaciones";

/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //tarea: obtener el heoreo por id
        const hereo = getHeroeById(2);
        resolve(hereo)
        console.log(hereo);
    }, 2000);
});

promesa
    .then((he) => {
        console.log('Heroe: ', he);
    })
    .catch( err => console.log(err));

*/

// funcion que obtiene un heroe por id
const getHeroeByIdV2 = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //tarea: obtener el heoreo por id
            const hereo = getHeroeById(id);
            hereo ? resolve(hereo): reject('No se encuentra el hereo')
            
        }, 2000);
    });
}

getHeroeByIdV2(10)
    .then(hereo => console.log('mi hereo: ', hereo))
    .catch(error => console.log(error))