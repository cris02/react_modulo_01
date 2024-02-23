// ARREGLOS

const arreglo = [];

// agregando elementos al arreglo
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

// crear nuevo arreglo sin referencia
const arreglo2 = [...arreglo, 5];

// crear un arreglo por medio de una funcion map
const arreglo3 = arreglo2.map((nuemero) => {
    return nuemero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);