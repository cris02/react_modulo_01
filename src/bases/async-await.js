// -------------------------------- ASYNC  -  AWAIT --------------------------------


const getImagenRando = async() => {
    try {
        const apiKey = 'xxxxxxxx';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await res.json();
        const {url} = await data.images.original;
        console.log(url);
    } catch (error) {
        console.log(error);
    }
    
}

getImagenRando();