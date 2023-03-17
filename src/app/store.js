import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer  from "../feactures/PokemonSlice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
})