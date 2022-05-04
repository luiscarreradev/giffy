import React, {useEffect, useState} from 'react';
import './App.css';

const GIFS = ['https://media.giphy.com/media/iDJQRjTCenF7A4BRyU/giphy.gif', 'https://media.giphy.com/media/dTJd5ygpxkzWo/giphy.gif']

const DIFEREENT_GIFS = ['https://media.giphy.com/media/gfGvtlxqgYKIEqSEdE/giphy.gif', 'https://media.giphy.com/media/WpxeQuE1hfvLow9Ir3/giphy.gif']

function App() {
    const [gifs, setGifs] = useState(GIFS)

    useEffect(() => {
      console.log('Renderizado!');
    })

    return (
        <div className="App">
            <section className="App-content">
                {
                    gifs.map(singleGif => <img src={singleGif} />)
                }
                <button onClick={() => setGifs(DIFEREENT_GIFS)}>Cambiar Gifs</button>
            </section>
        </div>
    );
}

export default App;
