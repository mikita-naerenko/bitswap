import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";


const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    offset: 0,
    test1: 'test1',
})



const mainCryptoListSlice = createSlice({
    name: 'mainCryptoList',
    initialState,
    reducers: {
        setOffset: (state, action) => {state.offset = action.payload}
    },
    // extraReducers: (builder) => {
    //     builder 
    //             .addCase(fetchFilters.pending, state => {state.filtersLoadingStatus = 'loading'})
    //             .addCase(fetchFilters.fulfilled, (state, action) => {
    //                 state.filtersLoadingStatus = 'idle';
    //                 filtersAdapter.setAll(state, action.payload);
    //             })
    //             .addCase(fetchFilters.rejected, state => {state.filtersLoadingStatus = 'error'})
    //             .addDefaultCase(() => {})
    // }
}); 

const {actions, reducer} = mainCryptoListSlice;
export default reducer;
export const {selectAll} = filtersAdapter.getSelectors(state => state.mainCryptoList);


export const {
    setOffset
} = actions;
