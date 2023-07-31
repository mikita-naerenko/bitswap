import { useRouter } from 'next/router';
// import AppBar from '../components/AppBar';
import AppBarHeader from '../components/appBarHeader/AppBarHeader';
import MarketsTable from '../components/MarketsTable';
import { setOffset } from '../redux/MainCryptoListSlice';
import { setCountForPagination } from '../redux/AppBarSlice';
import { setCurrentPage } from '../redux/AppBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState }  from 'react';
import { useGetCryptoDetailsQuery,
         useGetCryptoHistoryQuery, 
         useGetMarketsQuery, 
         useGetExchangesDetailsQuery, 
        } from '../services/api';
import SingleCoinCard from '../components/SingleCoinCard';
import BasicPagination from '../components/Pagination';
import Box from '@mui/material/Box';
import ModalWrapper from '../components/ModalWrapper';
import HistoricalTrend from '../components/historicalTrend/HistoricalTrend';
import CircularProgress from '@mui/material/CircularProgress';


const SingleCoinPage = () => {
  const [wallet, setWallet ] = useState(null)
    const {query} = useRouter();
    const currentCoin = query.singleCoinPage || (typeof window !== 'undefined' && localStorage.getItem('currentCoin'));
    const dispatch = useDispatch();
    const { offset } = useSelector(state => state.mainCryptoList);
    const { modalPurchaseCoin } = useSelector(state => state.modalState);
    const {
      // Fetch data for selected coin
        data: detailsData,
        isLoading: detailsIsLoading,
        isError: detailsIsError,
      } = useGetCryptoDetailsQuery(currentCoin);

    useEffect(() => {
        detailsData && setWallet({
        idToRequest: [detailsData.data.id],
        coinsList: [{
         label: detailsData.data.symbol
        }]
      })
    }, [detailsData])

      const {
        // Fetch data for markets by id selected coin
          data: marketsList,
          isLoading: marketsListIsLoading,
          isError: marketsListIsError,
        } = useGetMarketsQuery(currentCoin);
        const marketsListToRender = marketsList && marketsList.data.slice(offset, offset + 10);

        useEffect(() => {
          if (marketsList) {
            dispatch(setCountForPagination(marketsList.data.length));
            dispatch(setOffset(0))
          }
          
        },[marketsList]);

        const {
          // Fetch data for exchange list
            data: exchangesList,
            isLoading: exchangesListIsLoading,
            isError: exchangesListIsError,
          } = useGetExchangesDetailsQuery(currentCoin);
      
      const {
        // Fetch history for selected coin
        data: historyData,
        isLoading: historyIsLoading,
        isError: historyIsError,
      } = useGetCryptoHistoryQuery({id: query.singleCoinPage, interval: 'd1'});


      useEffect(() => {
        dispatch(setCurrentPage(currentCoin));
        if (currentCoin) {
          localStorage.setItem('currentCoin', currentCoin);
        }
      }, [currentCoin]);



      const displayMarketsTable = (marketsList) => {
        if (marketsList) return (
          <>
            <MarketsTable currentCoin={currentCoin} data={marketsList}/>
            <Box display="flex" justifyContent="center" sx={{marginTop: '20px'}}>
                      <BasicPagination/>  
            </Box>
          </>
        )
      }

    return (
        <>
            <AppBarHeader/>
            <ModalWrapper type="purchaseCoin" toggle={modalPurchaseCoin} />
            
            {detailsData && <SingleCoinCard data={detailsData}/>}
            {wallet ? <HistoricalTrend wallet={wallet}/> : <CircularProgress size={150} />}
            {displayMarketsTable(marketsListToRender)}
            

        </>
        
    )
}

export default SingleCoinPage;