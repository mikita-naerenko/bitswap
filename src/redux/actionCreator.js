import { updateFavoriteCoinsList } from './MainCryptoListSlice';
import store from './store'; 

export const dispatchUpdateData = (data) => {
    store.dispatch(updateFavoriteCoinsList(data));
  };