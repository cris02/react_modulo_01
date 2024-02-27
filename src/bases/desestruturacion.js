// -------------------------------- DESESTRUCTURACION --------------------------------

const persona = {
    nombre : 'cristian',
    edad: 45,
    clave: '12345'
}

//aplicando desestructuracion
const {nombre}  = persona;
console.log(nombre);

const getUsuario = ({ clave, edad, profesion = 'estudiante' }) => {
    //console.log(edad, profesion);
    return {
        nombreClave : clave,
        anios : edad,
        latlon: {
            lat : '123',
            lon: '987'
        }
    }
}

const {nombreClave, anios, latlon} = getUsuario(persona)
const { lat, lon } = latlon;
console.log(nombreClave, anios);