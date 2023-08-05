import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { autoPurchaseCoin } from "../../utils/utils";
import { removecoinsToAutoBuying } from '../../redux/WatcherPriceSlice';
import { updateFrozenBalanceAfterPurchase } from '../../redux/AccountProfileSlice';



const AutoPurchase = () => {
    const dispatch = useDispatch();
    const { coinsToAutoBuying } = useSelector(state => state.watcherPrice)
    const { user } = useSelector(state => state.accountProfile);
    useEffect(() => {
        if (coinsToAutoBuying.length > 0) {
            coinsToAutoBuying.forEach(coin => {
                const actualPrice = (Number(coin.amount) * Number(coin.currentPrice)).toFixed(2)
                autoPurchaseCoin(dispatch,coin,user);
                dispatch(updateFrozenBalanceAfterPurchase({oldPrice: coin.amountInUsd, actualPrice: actualPrice}))
                dispatch(removecoinsToAutoBuying(coin));
            })
            
        }
    },[coinsToAutoBuying])

}

export default AutoPurchase;