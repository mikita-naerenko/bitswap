import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { user } from './mockData';
const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
  user: user
});

const accountProfileSlice = createSlice({
    name: 'accountProfile',
    initialState,
    reducers: {
        setUser: (state, action) => {state.user = action.payload},
        replenishTheBalance: (state,action) => {
            const payment = action.payload;
            const balance = state.user.balance;
            const result = Number(payment) + Number(balance);
            state.user.balance = result.toString();
        },
        updateCostUsdofCoinsList: (state,action) => {
            const newData = action.payload;
            const updatedCoinsList = state.user.wallet.coinsList.map((coin) => {
                if (newData[coin.id] && coin.priceUsd !== newData[coin.id]) {
                  return {
                    ...coin,
                    priceUsd: newData[coin.id],
                    // valueOnUsd: Number(newData[coin.id] * coin.value)
                  };
                }
                return coin;
              });
              return {
                ...state,
                user: {
                  ...state.user,
                  wallet: {
                    ...state.user.wallet,
                    coinsList: updatedCoinsList,
                  },
                },
              };
        },
        writeOffBalance: (state, action) => {
            const data = action.payload;
            const balance = state.user.balance;
            const result = Number(balance) - Number(data);
            state.user.balance = result.toString();
        },
        addCoinOnWallet: (state, action) => { 
            const newData = action.payload;
            const updateCoinsList = state.user.wallet.coinsList.map((coin,i) => {
                if (coin.id === newData.id) {
                    return {
                        ...coin,
                        valueCoin: coin.valueCoin + newData.valueCoin
                    }
                };
                return coin
            })
            if (!updateCoinsList.some(coin => coin.id === newData.id)) {
                updateCoinsList.push(newData)
            }
            return {
                ...state,
                user: {
                  ...state.user,
                  wallet: {
                    ...state.user.wallet,
                    coinsList: updateCoinsList,
                  },
                },
              };
            
        },
        updateUserAvatar: (state, action) => {state.user.avatar = action.payload},
        updateUserProfile: (state, action) => {
            for (let key in action.payload) {
                if (action.payload[key] !== state.user[key]) {
                    state.user[key] = action.payload[key]
                }
            }
        },
        updateIdToRequest: (state,action) => {
            const newData = action.payload;
            state.user.wallet.idToRequest = [...state.user.wallet.idToRequest, newData];
        },
        updateNotificationState: (state,action) => {
            const updatedNotifications = state.user.notifications.map(notice => {
                if (notice.id === action.payload && notice.display === false) {
                  return notice
                };
                if (notice.id === action.payload) {
                    return {
                            ...notice,
                            display: !notice.display
                        }
                } else {
                    return notice
                }
            })
            state.user.notifications = updatedNotifications
        },
        addNewNotification: (state, action) => {
            const newData = action.payload;
            state.user.notifications = [...state.user.notifications, newData]
        },
        updateFrozenBalance: (state,action) => {
          const newData = Number(action.payload);
          state.user.frozenBalance = Number(state.user.frozenBalance) + newData;
          state.user.balance = Number(state.user.balance) - newData;
        },
        withdrawalFromFrozenBalance: (state,action) => {
          const newData = Number(action.payload);
          state.user.frozenBalance = Number(state.user.frozenBalance) - newData;
          
        }, 
        updateFrozenBalanceAfterPurchase: (state,action) => {
          const newData = action.payload;
          if (newData.actualPrice < newData.oldPrice) {
            const remeinder = newData.oldPrice - newData.actualPrice;
            state.user.frozenBalance = state.user.frozenBalance - remeinder;
            state.user.balance = Number(state.user.balance) + remeinder;
          }
        },
        updateFrozenBalanceAfterRemoveFromWatchList : (state,action) => {

          const newData = action.payload;
          state.user.frozenBalance = state.user.frozenBalance - newData.amountInUsd;
          state.user.balance = state.user.balance + newData.amountInUsd;
        }
    },
}); 


const {actions, reducer} = accountProfileSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.accountProfile);


export const {
    setUser,
    updateUserAvatar,
    updateUserProfile,
    replenishTheBalance,
    writeOffBalance,
    addCoinOnWallet,
    updateCostUsdofCoinsList,
    updateIdToRequest,
    updateNotificationState,
    addNewNotification,
    updateFrozenBalance,
    withdrawalFromFrozenBalance,
    updateFrozenBalanceAfterPurchase,
    updateFrozenBalanceAfterRemoveFromWatchList,

} = actions;