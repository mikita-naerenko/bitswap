import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useGetCryptoDetailsQuery } from "../components/api";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    offset: 0,
    favoriteCoinsForRequest: [],
    cryptoDetails: {} ,
    favoriteCoinsList: []
})


const mainCryptoListSlice = createSlice({
    name: 'mainCryptoList',
    initialState,
    reducers: {
        setOffset: (state, action) => {state.offset = action.payload},
        
        addFavoriteCoinsForRequest: (state, action) => {
            const newFavorite = action.payload;
            state.favoriteCoinsForRequest.push(newFavorite);
          },
        removeFavoriteCoinsForRequest: (state, action) => {
            const coinToRemove = action.payload;
            state.favoriteCoinsForRequest = state.favoriteCoinsForRequest.filter(
              (coin) => coin !== coinToRemove
            );
          },
        setFavoriteCoinsList: (state,action) => { state.favoriteCoinsList = action.payload},
        updateFavoriteCoinsList: (state,action) => {
          const newData = action.payload;
          state.favoriteCoinsList.forEach((coin, index) => {
            if (newData[coin.id]) {
              if (coin.priceUsd !== newData[coin.id]) {
                state.favoriteCoinsList[index] = {
                  ...coin,
                  priceUsd: newData[coin.id],
                };
              }
            }
          })
        }
    },
    extraReducers: (builder) => {
  },
}); 

const {actions, reducer} = mainCryptoListSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.mainCryptoList);


export const {
    setOffset,
    addFavoriteCoinsForRequest,
    removeFavoriteCoinsForRequest,
    setFavoriteCoinsList,
    updateFavoriteCoinsList
} = actions;
