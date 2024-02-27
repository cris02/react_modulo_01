// -------------------------------- FUNCIONES --------------------------------


// funcion de fecha
const saludar = ((nombre) => {
    return ` Bienvenido ${nombre} al curso de javascript basico`
});

// funcion de fecha que solo contiene una linea de codigo
const saludar2 = ((pais) => (`el ${pais} de origen del estudiante`))
console.log(saludar('cristian'));
console.log(saludar2('El salvador'));

// retornando un objeto implicitamente.
const getUser = () => (
    {
        nombre : 'cristian',
        apellido : 'Aguilar',
        edad: 35
    }
)

console.log(getUser());