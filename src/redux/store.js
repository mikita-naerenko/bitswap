import { configureStore } from '@reduxjs/toolkit';
import mainCryptoList from './MainCryptoListSlice';
import appBar from './AppBarSlice';
import accountProfile from './AccountProfileSlice';
import modalState from './ModalStateSlice';
import {api} from '../services/api';

// Import your reducers here
// e.g., import counterReducer from './counterSlice';

const store = configureStore({
  reducer: { 
    mainCryptoList, appBar, [api.reducerPath]: api.reducer, accountProfile, modalState
    // devTools: process.env.NODE_ENV !== 'production',
    // Add your reducers here
    // e.g., counter: counterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),

});

export default store;