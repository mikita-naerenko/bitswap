import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    currentPage: 'Main crypto-list',
});



const appBarSlice = createSlice({
    name: 'appBar',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {state.currentPage = action.payload}
    },
}); 


const {actions, reducer} = appBarSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.appBar);


export const {
    setCurrentPage
} = actions;