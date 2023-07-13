import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    currentPage: 'Main crypto-list',
    searchResults: null,
    countForPagination: 0,
});



const appBarSlice = createSlice({
    name: 'appBar',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {state.currentPage = action.payload},
        setSearchResults: (state,action) => {state.searchResults = action.payload},
        setCountForPagination: (state, action) => {state.countForPagination = action.payload},
    },
}); 


const {actions, reducer} = appBarSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.appBar);


export const {
    setCurrentPage,
    setSearchResults,
    setCountForPagination
} = actions;