import React, {useEffect, useState} from 'react';
import './App.css';

const API = 'https://api.giphy.com/v1/gifs/search?api_key=cFbaH37V7Dg4tm47pc5a8pVIaqG3yjsE&q=panda&limit=10&offset=0&rating=g&lang=en'

function App() {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
      fetch(API)
      .then(res => res.json())
      .then(response => {
          const {data} = response
          if(Array.isArray){
            const gifs = data.map(image => image.images.downsized_medium.url)
            console.log(gifs);
            setGifs(gifs)
          }
        })
    }, [])

    return (
        <div className="App">
            <section className="App-content">
                {
                    gifs.map(singleGif => <img src={singleGif} alt="an gift"/>)
                }
            </section>
        </div>
    );
}

export default App;
