import React, {useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  const [keyword, setKeyword] = useState('programming');

  const handleChange = (evento) => {
    setKeyword(evento.target.value);
  }


  return (
      <div className="App">
          <section className="App-content">
            <h1>Gifs App</h1>
            <input
              placeholder='Ingresa nombre del gif ...'
              type="search"
              name="input-search"
              onChange={handleChange} />
            <div className="ListOfGifs">
              <ListOfGifs keyword={keyword}/>
            </div>
          </section>
      </div>
  );
}

export default App;
