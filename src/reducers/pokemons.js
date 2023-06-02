import { SET_FAVORITE, SET_LOADING, SET_POKEMONS, SET_SEARCH, SET_MODAL_VISIBLE } from "../actions/types"

const initialState = {
    pokemons: [],
    loading: false,
    searchText: '',
    favoritePokemons: [],
    modalVisible: false,
}

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS: 
            return {
                ...state, 
                pokemons: action.payload,
            }
        case SET_FAVORITE:
            const newPokemonList = [...state.pokemons]

            const currentPokemonIndex = newPokemonList.findIndex(
                (pokemon) => {
                    return pokemon.id === action.payload.pokemonId
                }
            )

            if(currentPokemonIndex < 0) {
                return state
            }

            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite

            const favoritePokemons = newPokemonList.filter(
                (pokemon) => pokemon.favorite
              );
            
            return {...state, pokemons: newPokemonList, favoritePokemons: favoritePokemons}
        case SET_SEARCH:
            return {
                ...state,
                searchText: action.payload,
            }
        case SET_MODAL_VISIBLE:
            return {
                ...state,
                modalVisible: action.payload,
            };
        case SET_LOADING:
            return {
                ...state, 
                loading: action.payload,
            }
        default:
            return state
    }
}