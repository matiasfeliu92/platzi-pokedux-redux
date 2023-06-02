// actions/index.js
import { SET_FAVORITE, SET_FAVORITES_POKEMONS, SET_LOADING, SET_MODAL_VISIBLE, SET_POKEMONS, SET_SEARCH } from "./types";
import { getPokemonDetails } from "../api";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const setFavoritesPokemons = (payload) => ({
  type: SET_FAVORITES_POKEMONS,
  payload
})

export const setSearchbar = (search) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setModalVisible = (payload) => ({
  type: SET_MODAL_VISIBLE,
  payload,
})

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonDetailed = await Promise.all(
    pokemons.map((pokemon) => getPokemonDetails(pokemon))
  );

  dispatch(setPokemons(pokemonDetailed));
};
