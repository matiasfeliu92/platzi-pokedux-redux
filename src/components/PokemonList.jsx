import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({pokemons}) => {
    console.log(pokemons)
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon, index)=>{
        return <PokemonCard key={pokemon.name} name={pokemon.name}/>
      })}
    </div>
  )
}

export default PokemonList
