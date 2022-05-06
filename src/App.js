import React, {useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

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
              <Link to="/gif/panda">Panda</Link>
              <Link to="/gif/ecuador">ecuador</Link>
              <Link to="/gif/chile">chile</Link>

              <Route 
                path='/gif/:keyword'
                component={ListOfGifs}
              />
          </section>
      </div>
  );
}

export default App;
