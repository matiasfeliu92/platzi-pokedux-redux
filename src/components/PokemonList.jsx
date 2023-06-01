import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({pokemons}) => {
    console.log(pokemons)
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon, index)=>{
        return <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.sprites.front_default} habilities={pokemon.abilities}/>
      })}
    </div>
  )
}

export default PokemonList
