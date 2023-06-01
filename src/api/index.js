import axios from "axios"

export const getPokemon = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        return response.data.results;
      } catch (error) {
        throw error;
      }
}

export const getPokemonDetails = async(pokemon) => {
  try {
    const response = await axios.get(pokemon.url)
    return response.data
  } catch (error) {
    throw error;
  }
  // return axios.get(pokemon.url)
  // .then(res => res.data)
  // .catch((err) => console.log(err))
}