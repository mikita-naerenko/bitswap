import { useSelector, useDispatch } from "react-redux";
import { useGetFavoriteCoinsQuery } from '../../services/api';
import { comparePrice } from '../../redux/WatcherPriceSlice';
import { useEffect } from "react";




const WatcherPrice = () => {
    const dispatch = useDispatch();
    const { watchedCoins } = useSelector(state => state.watcherPrice);
    const arrToRequest = watchedCoins.map(coin => coin.id);

    const { data } = useGetFavoriteCoinsQuery(arrToRequest, {pollingInterval: 5000,});
    const filteredData = data ? data.map(item => item.data) : [];

    useEffect(() => {
        if (filteredData.length > 0) {
            dispatch(comparePrice(filteredData))
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ filteredData])


    return null;
}

export default WatcherPrice;