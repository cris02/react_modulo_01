// OBJETOS

const persona = {
    nombre: 'cristian',
    apellido: 'aguilar',
    edad: 34,
    direccion: {
        departamento: 'San salvador',
        municipio: 'mejicanos',
        lat: '256.25477',
        lon: '1.22222222'
    }
};

// paso por referencia
const persona2 = persona;
persona2.nombre = 'luis';


// realizar una copia del objjeto sin referencia (utilizando el operador spreet)
const persona3 = {...persona};
persona3.nombre = 'carlos';

console.log(persona);
console.log(persona2);
console.log(persona3);