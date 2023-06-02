import { Button, Col, Spin, Modal, Card } from 'antd';
import Searcher from './components/Searcher';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from './components/PokemonList';
import { useEffect } from 'react';
import { getPokemon } from './api/index'
import Meta from "antd/es/card/Meta";
import { getPokemonsWithDetails, setLoading, setFavoritesPokemons, setModalVisible } from './actions/index';

function App() {

  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector((state) => state.loading)
  const searchText = useSelector((state) => state.searchText);
  const favoritePokemons = useSelector((state) => state.favoritePokemons)
  console.log(favoritePokemons)
  const modalVisible = useSelector(state => state.modalVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        dispatch(setLoading(true))
        const pokemonRes = await getPokemon();
        console.log(pokemonRes)
        dispatch(getPokemonsWithDetails(pokemonRes));
        dispatch(setLoading(false))
        dispatch(setFavoritesPokemons(favoritePokemons));
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemons()
  }, [])

  const openModal = () => {
    dispatch(setModalVisible(true))
  }

  return (
    <div className="App">
      <Modal
        title="Favorite Pokemon List"
        visible={modalVisible}
        onCancel={() => dispatch(setModalVisible(false))}
        footer={null}
      >
        {favoritePokemons.map((pok)=>{
          return(
            <Card 
              title={pok.name} 
              cover={
                <img
                  src={pok.sprites.front_default}
                  alt={pok.name}
                />
              }
            >
              <Meta description={pok.types[0].type.name} />
            </Card>
          )
        })}
      </Modal>
      <Col className='img-container' span={4} offset={10}>
        <img className='logo' src='https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg' alt='Pokedux' />
      </Col>
      <Col span={4} offset={11}>
        <Button className="open-modal-button" onClick={openModal}>
          ABRIR MODAL
        </Button>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} search={searchText} />
      )}
    </div>
  );
}

export default App;
