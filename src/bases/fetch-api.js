// -------------------------------- FETCH API --------------------------------

const apiKey = 'xxxxxxxx';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//gestionando la promesa
peticion
    .then(res => res.json())
    .then(({data}) => console.log(data.images.original))
    .catch(console.error);