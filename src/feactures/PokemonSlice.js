import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon : [],
        search: '',
        allPoke: []
    },
    reducers: {
        pokemones: (state, action) => {
            state.pokemon = action.payload
        },
        buscar: (state, action) => {
            state.search = action.payload
        },
        allPokemones: (state, action) => {
            state.allPoke = action.payload
        }
    }
})

export const { pokemones, buscar, allPokemones } = pokemonSlice.actions
export default pokemonSlice.reducer;