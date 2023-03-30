export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HUCE6mC5jyiv6Ao01bO30YYry6oXTwYR&q=${category}&limit=10`
    const resp = await fetch (url)
    const {data} = await resp.json()  //Extraer campo data del json de respuesta de la API

    const gifs = data.map( gif => (
        {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    ))

    return gifs
    
}