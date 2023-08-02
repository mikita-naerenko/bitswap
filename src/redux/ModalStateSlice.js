import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    modalEditProfileDisplayed: false,
    modalPaymentDisplayed: false,
    modalPurchaseCoin: false,
    modalAddToWatchList: false,
});

const modalStateSlice = createSlice({
    name: 'modalState',
    initialState,
    reducers: {
        setModalEditProfileDisplayed: (state,action) => {state.modalEditProfileDisplayed = action.payload},
        setModalPaymentDisplayed: (state,action) => {state.modalPaymentDisplayed = action.payload},
        setModalPurchaseCoin: (state,action) => {state.modalPurchaseCoin = action.payload},
        setModalAddToWatchList: (state,action) => {state.modalAddToWatchList = action.payload},
    },
}); 


const {actions, reducer} = modalStateSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.modalState);


export const {
    setModalEditProfileDisplayed,
    setModalPaymentDisplayed,
    setModalPurchaseCoin,
    setModalAddToWatchList,
} = actions;