import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    user: {},
    editModalDisplayed: false,
    modalPaymentDisplayed: false,
});

const appBarSlice = createSlice({
    name: 'accountProfile',
    initialState,
    reducers: {
        setUser: (state, action) => {state.user = action.payload},
        setEditModalDisplayed: (state,action) => {state.editModalDisplayed = action.payload},
        setModalPaymentDisplayed: (state,action) => {state.modalPaymentDisplayed = action.payload},
        replenishTheBalance: (state,action) => {
            const payment = action.payload;
            const balance = state.user.balance;
            const result = Number(payment) + Number(balance);
            state.user.balance = result.toString();
        },
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


const {actions, reducer} = appBarSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.accountProfile);


export const {
    setUser,
    updateUserAvatar,
    setEditModalDisplayed,
    updateUserProfile,
    setModalPaymentDisplayed,
    replenishTheBalance,
} = actions;