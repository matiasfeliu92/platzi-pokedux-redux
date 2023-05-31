import { Col } from 'antd';
import Searcher from './components/Searcher';
import './App.css';
import PokemonList from './components/PokemonList';
import { useEffect, useState } from 'react';
import { getPokemon } from './api/index'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => { 
      try {
        const pokemonRes = await getPokemon();
        setPokemons(pokemonRes.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemons()
  }, [])

  console.log(pokemons)

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src='https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg' alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
