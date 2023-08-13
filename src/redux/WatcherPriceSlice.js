import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createNoticeWatchMatch } from '../utils/createNotice';


const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    watchedCoins: [],
    notifications: [],
    coinsToAutoBuying: [], 
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
              state.watchedCoins.forEach(watcherCoin => {
                if (newCoin.id === watcherCoin.id) {
                  if (Number(newCoin.priceUsd) <= Number(watcherCoin.desiredPrice)) {
                    const notice = createNoticeWatchMatch(watcherCoin,newCoin)

                    state.notifications = [...state.notifications, notice]
                    const newWatchedCoins = state.watchedCoins.filter(coin => coin.id !== newCoin.id);
                    // If autoBuying === true, add to array for buying
                    if (watcherCoin.autoBuying === true) {
                      state.coinsToAutoBuying.push({
                                                      ...watcherCoin, 
                                                      currentPrice: newCoin.priceUsd,
                                                      idForRequest: newCoin.id, 
                                                  })
                    }
                    state.watchedCoins = [...newWatchedCoins];
                  }
                }
              })
            })
          },
          updateWatcherNotification: (state,action) => {
            const updatedNotifications = state.notifications.map(notice => {
                if (notice.id === action.payload) {
                    return {
                            ...notice,
                            display: !notice.display
                        }
                } else {
                    return notice
                }
            })
            state.notifications = updatedNotifications
        },
        removecoinsToAutoBuying: (state,action) => {
          const newData = action.payload;
          const updatedcoinsToAutoBuying =  state.coinsToAutoBuying.filter(coin => coin.id !== newData.id);
          state.coinsToAutoBuying = [...updatedcoinsToAutoBuying];
        },
        removeCoinFromWatchedCoins: (state,action) => {
          const newData = action.payload;
          const updatedWatchedCoins =  state.watchedCoins.filter(coin => coin.key !== newData);
          state.watchedCoins = [...updatedWatchedCoins];
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
    updateWatcherNotification,
    removecoinsToAutoBuying,
    removeCoinFromWatchedCoins

} = actions;