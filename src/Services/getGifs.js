const apiKey = 'cFbaH37V7Dg4tm47pc5a8pVIaqG3yjsE&q'


export default function getGifs({keyword = 'morty'} = {}) {
  const API = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=g&lang=en`
  
  return fetch(API)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      if(Array.isArray(data)) {
        const gifs = data.map(image => {
          const { title, id, images } = image
          const { url } = images.downsized_medium
          return { title, id, url }
        })
        return gifs
      }
    })
}