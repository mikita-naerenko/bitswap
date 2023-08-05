import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();
const initialState = filtersAdapter.getInitialState({
    filter: 'all',
    flagWatched: false,
    watchedAccordionId: '',
});

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    },
}); 


const {actions, reducer} = historySlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.history);


export const {
    setFilter,
} = actions;