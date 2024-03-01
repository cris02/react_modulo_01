// -------------------------------- PROMESAS --------------------------------

import getHeroeById from "./bases/exportaciones";

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //tarea: obtener el heoreo por id
        const hereo = getHeroeById(2);
        console.log(hereo);
    }, 2000);
});

promesa.then(() => {
    console.log('Then de la promesa');
})
