import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();
const { v4: uuidv4 } = require('uuid');
const initialState = filtersAdapter.getInitialState({
    watchedCoins: [],
    notifications: [], 
    coinToAdd: '',
});

const watcherPriceSlice = createSlice({
    name: 'watcherPrice',
    initialState,
    reducers: {
          addWatchedCoin: (state, action) => {
            state.watchedCoins.push(action.payload);
          },
          removeWatchedCoin: (state, action) => {
            state.watchedCoins = state.watchedCoins.filter(coin => coin.id !== action.payload);
          },
          addNotification: (state, action) => {
            state.notifications.push(action.payload);
          },
          setCoinToAdd: (state, action) => {
            state.coinToAdd = action.payload;
          },
          comparePrice: (state, action) => {
            const newData = action.payload;
            newData.forEach(newCoin => {
              state.watchedCoins.forEach(oldCoin => {
                if (newCoin.id === oldCoin.id) {
                  console.log(newCoin.priceUsd, oldCoin.desiredPrice);
                  if (Number(newCoin.priceUsd) <= Number(oldCoin.desiredPrice)) {
                    const notice = {
                      id: uuidv4(),
                      time: new Date().getTime(),
                      type: 'watchMatch',
                      text: `Price of ${oldCoin.name} - ${Number(newCoin.priceUsd).toFixed(2)} your desired price - ${Number(oldCoin.desiredPrice).toFixed(2)}`,
                      display: true,
                    }
                    console.log(notice);
                    state.notifications = [...state.notifications, notice]
                    const newWatchedCoins = state.watchedCoins.filter(coin => coin.id !== newCoin.id);
                    state.watchedCoins = [...newWatchedCoins]
                  }
                }
              })
            })
          },
    },
}); 


const {actions, reducer} = watcherPriceSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.watcherPrice);


export const {
    addWatchedCoin,
    removeWatchedCoin,
    addNotification,
    setCoinToAdd,
    comparePrice,

} = actions;