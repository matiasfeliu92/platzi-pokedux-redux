import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from './components/PokemonList';
import { useEffect } from 'react';
import { getPokemon } from './api/index'
import { getPokemonsWithDetails, setLoading } from './actions/index';

function App() {

  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector((state) => state.loading)
  const dispacth = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        dispacth(setLoading(true))
        const pokemonRes = await getPokemon();
        console.log(pokemonRes)
        dispacth(getPokemonsWithDetails(pokemonRes));
        dispacth(setLoading(false))
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemons()
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src='https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg' alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large'/>
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// })

// const mapDispactchToProps = (dispacth) => ({
//   setPokemons: (value) => dispacth(setPokemonsActions(value))
// })

export default App;
