import { updateFavoriteCoinsList } from './MainCryptoListSlice';
import { updateCostUsdofCoinsList } from './AccountProfileSlice';
import store from './store'; 

export const dispatchUpdateData = (data) => {
    store.dispatch(updateFavoriteCoinsList(data));
  };

export const dispatchWalletData = (data) => {
  store.dispatch(updateCostUsdofCoinsList(data))
}