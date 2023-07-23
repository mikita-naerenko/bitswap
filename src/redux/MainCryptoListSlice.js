import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";


const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    offset: 0,
    favoriteCoinsForRequest: [],
    cryptoDetails: {} ,
    favoriteCoinsList: [],
    modalPurchaseCoinDisplayed: false, 
    coinToPurchase: ''
})


const mainCryptoListSlice = createSlice({
    name: 'mainCryptoList',
    initialState,
    reducers: {
        setOffset: (state, action) => {state.offset = action.payload},
        
        addFavoriteCoinsForRequest: (state, action) => {
          // Add selected coins on favorite list (this list will be use as request pull)
            const newFavorite = action.payload;
            state.favoriteCoinsForRequest.push(newFavorite);
          },
        removeFavoriteCoinsForRequest: (state, action) => {
          // Compare removing list with add Favorite CoinsForRequest state and remove matched items
            const coinToRemove = action.payload;
            const coinsToRemoveObj = {};
            coinToRemove.forEach(coin => {
              coinsToRemoveObj[coin] = coin;
            })
            state.favoriteCoinsForRequest = state.favoriteCoinsForRequest.filter(
              (coin) => {
              return  coin !== coinsToRemoveObj[coin]
              }
            );
          },
        setFavoriteCoinsList: (state,action) => { state.favoriteCoinsList = action.payload},
        updateFavoriteCoinsList: (state,action) => {
          // Update curren list of favorite coins (this state will be use for render)
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
        },
        setModalPurchaseCoinDisplayed: (state,action) => {state.modalPurchaseCoinDisplayed = action.payload},
        setCoinToPurchase: (state,action) => {state.coinToPurchase = action.payload},
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
    updateFavoriteCoinsList,
    setModalPurchaseCoinDisplayed,
    setCoinToPurchase,
} = actions;
