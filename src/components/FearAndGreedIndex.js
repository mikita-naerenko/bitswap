
import { useGetCryptoListQuery, useGetHistoryCoinsOfWalletQuery,  useGetCryptoHistoryQuery} from '../services/api';
import {
    Typography,
  } from '@mui/material';


const FearAndGreedIndex = () => {

    const {
        // Fetch history for selected coin
        data: historyData,
        isLoading: historyIsLoading,
        isError: historyIsError,
      } = useGetCryptoHistoryQuery({id :'bitcoin', interval: 'm1'});
      const { data } = useGetCryptoListQuery({offset: 0, limit: 1000});

      const arrToRequest = data && data.data.map(item => item.id).filter(item => item !== '')

      const {
        data: historyDataAll,
        isError
      } = useGetHistoryCoinsOfWalletQuery({arrId: arrToRequest, interval: 'm1'});

      const allCoins = historyDataAll ? historyDataAll : null;


      console.log(historyDataAll);


      const calcFearAndGreedIndex = (data) => {
        if (data === null) return;
        const filteredData = data.filter(coin => coin.data.length > 2);
        console.log(filteredData.length);
        const intermediateResult = [];
        filteredData.forEach(coin => {
            const firstPrice = coin.data[0].priceUsd;
            const lastPrice = coin.data[coin.data.length -1].priceUsd;
            const pecentageChange = (lastPrice - firstPrice) / firstPrice;
            intermediateResult.push(pecentageChange)
        })
        const percantageChange = intermediateResult.reduce((acc,cur) => acc += cur) / intermediateResult.length
        console.log(percantageChange);
        // Last 24h
        // const firstPrice = data[0].priceUsd;
        // const lastPrice = data[data.length -1].priceUsd;
        // const pecentageChange = (lastPrice - firstPrice) / firstPrice;
        // console.log(pecentageChange);
      }
      historyData &&  calcFearAndGreedIndex(allCoins)


    return (
        <Typography></Typography>
    )

}

export default FearAndGreedIndex;