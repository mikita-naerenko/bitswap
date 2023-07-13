import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useGetCryptoDetailsQuery } from "../components/api";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    offset: 0,
    favoritesCoin: [],
    cryptoDetails: {} ,
})


const mainCryptoListSlice = createSlice({
    name: 'mainCryptoList',
    initialState,
    reducers: {
        setOffset: (state, action) => {state.offset = action.payload},
        
        addFavoritesCoin: (state, action) => {
            const newFavorite = action.payload;
            state.favoritesCoin.push(newFavorite);
          },
        removeFavoritesCoin: (state, action) => {
            const coinToRemove = action.payload;
            state.favoritesCoin = state.favoritesCoin.filter(
              (coin) => coin !== coinToRemove
            );
          },
    },
    extraReducers: (builder) => {
  },
}); 

const {actions, reducer} = mainCryptoListSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.mainCryptoList);


export const {
    setOffset,
    addFavoritesCoin,
    removeFavoritesCoin,
} = actions;
