import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    user: {
        avatar: '/assets/avatars/avatar-test-1.png',
        city: '예산군',
        country: '한국',
        jobTitle: 'Senior Developer',
        firstName: 'Mikita',
        lastName: 'Naerenko',
        timezone: 'GTM-7',
        joined: '2023-07-20',
        description: 'Hello World!',
        balance: '100000',
        wallet: {   
                    coinsList :[
                    {coin: 'Bitcoin', valueCoin: 0.05, label: 'BTC', id: "bitcoin", priceUsd: "29171.33"},
                    {coin: 'Tether', valueCoin: 1000, label: 'USDT', id: "tether", priceUsd: "1.00"},
                    {coin: 'BNB', valueCoin: 10, label: 'BNB', id: "binance-coin", priceUsd: "237.34"},
                    {coin: 'Dogecoin', valueCoin: 3000, label: 'DOGE', id: "dogecoin", priceUsd: "0.077229"},
                    ],
                    idToRequest: ["bitcoin", "tether", "binance-coin", "dogecoin"]

                    
                },
      },
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
} = actions;