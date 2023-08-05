import { configureStore } from '@reduxjs/toolkit';
import mainCryptoList from './MainCryptoListSlice';
import appBar from './AppBarSlice';
import accountProfile from './AccountProfileSlice';
import modalState from './ModalStateSlice';
import watcherPrice from './WatcherPriceSlice';
import history from '../components/history/HistorySlice';
import {api} from '../services/api';

const store = configureStore({
  reducer: { 
    mainCryptoList, appBar, [api.reducerPath]: api.reducer, accountProfile, modalState, watcherPrice, history
    // devTools: process.env.NODE_ENV !== 'production',
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),

});

export default store;