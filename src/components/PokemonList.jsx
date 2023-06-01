import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          habilities={pokemon.abilities}
          types={pokemon.types}
          id={pokemon.id}
          favorite={pokemon.favorite} // Agrega la propiedad 'favorite' al componente PokemonCard
        />
      ))}
    </div>
  )
}

export default PokemonList;