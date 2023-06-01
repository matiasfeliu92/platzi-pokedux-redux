import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons, search }) => {
  console.log(search)
  let pokemonsFiltered
  if(search != ""){
    pokemonsFiltered = pokemons.filter((pok) => pok.types[0].type.name.includes(search))
    return (
      <div className='PokemonList'>
        {pokemonsFiltered.map((pokemon) => (
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