import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './Services/getGifs';
import Gif from './components/Gif';

function App() {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
      getGifs({keyword: 'rick'})
      .then(gifs => setGifs(gifs))
    }, [])

    return (
        <div className="App">
            <section className="App-content">
                {
                    gifs.map(singleGif => (
                      <Gif
                        title={singleGif.title}
                        url={singleGif.url}
                        id={singleGif.id}
                        key={singleGif.id}
                      />)
                      )
                }
            </section>
        </div>
    );
}

export default App;
