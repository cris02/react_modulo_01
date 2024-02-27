// -------------------------------- DESESTRUCTURACION DE ARREGLOS --------------------------------

const persona = ['persona1', 'persona2', 'persona3'];

//aplicando desestructuracion
//f2 para seleccionar la variable y renombrar en todo el documento
const [ p1 ] = persona;
console.log(p1);

const getArreglo = () => {
    return ['hola', 12456];
}

//aplicando desestructuracion
const [letra, numero] = getArreglo();
console.log(letra, numero);

// tarea
const arregloPrueba = (valor) => {
    return [valor, () => {console.log('hola mundo');}];
}

//aplicando desestructuracion
const [nombre, setNombre] = arregloPrueba('cristian');
console.log(nombre);
setNombre();