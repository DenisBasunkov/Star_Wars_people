import { configureStore } from '@reduxjs/toolkit'
import CharactersSlise from "./CharactersSlice"

const store = configureStore({
    reducer: {
        repos: CharactersSlise
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch