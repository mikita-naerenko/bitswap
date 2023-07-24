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
        wallet: [],
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
        writeOffBalance: (state, action) => {
            const data = action.payload;
            const balance = state.user.balance;
            const result = Number(balance) - Number(data);
            state.user.balance = result.toString();
        },
        addCoinOnWallet: (state, action) => { state.user.wallet.push(action.payload)},
        updateUserAvatar: (state, action) => {state.user.avatar = action.payload},
        updateUserProfile: (state, action) => {
            for (let key in action.payload) {
                if (action.payload[key] !== state.user[key]) {
                    state.user[key] = action.payload[key]
                }
            }
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
} = actions;