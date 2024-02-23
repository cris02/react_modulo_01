// variables y constantes
const nombre = 'cristian';
const apellido = 'aguilar';


//concatenando tradicionalmente
const nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// aplicando template string
const nombreConcatenado = ` tu nombre es ${nombre} ${apellido}`;
console.log(nombreConcatenado);

function getSaludo(name) {
    return `Bienvenido ${name} al curso de react`;
}


const saludo = `Mensaje de la funcion = ${getSaludo('cristian')}`;
console.log(saludo);