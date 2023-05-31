import axios from "axios"

export const getPokemon = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        return response.data;
      } catch (error) {
        throw error;
      }
}