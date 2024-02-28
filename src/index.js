// -------------------------------- IMPORTACIONES, EXPORTACION Y FUNCIONES DE ARREGLOS --------------------------------

//importar
import { heroes } from './data/heroes'; 

//funcion que retorne la informacion de un heroe por id
const getHeroe =  (id) => {
    //la funcion find solo retorna un valor
    return heroes.find((e) => e.id === id)
}

const getHeroeDC = (owner) => {
    //la funcion filter retorna varios valores
    return heroes.filter((e) => e.owner === owner);
}

console.log(getHeroe(2));
console.log(getHeroeDC('Marvel'));