import { useRouter } from 'next/router';

import { setOffset } from '../redux/MainCryptoListSlice';
import { setCountForPagination, setCurrentPage } from '../redux/AppBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState }  from 'react';
import { useGetCryptoDetailsQuery,
         useGetMarketsQuery, 
        } from '../services/api';
import SingleCoinCard from '../components/singleCoinCard/SingleCoinCard';
import MainPagination from '../components/pagination/MainPagination';
import Box from '@mui/material/Box';


import ModalWrapper from '../components/modal/ModalWrapper';
import HistoricalTrend from '../components/historicalTrend/HistoricalTrend';
import CircularProgress from '@mui/material/CircularProgress';
import AppBarHeader from '../components/appBarHeader/AppBarHeader';
import MarketsTable from '../components/marketsTable/MarketsTable';

const SingleCoinPage = () => {
  const [wallet, setWallet ] = useState(null)
    const {query} = useRouter();
    const currentCoin = query.singleCoinPage || (typeof window !== 'undefined' && localStorage.getItem('currentCoin'));
    const dispatch = useDispatch();
    const { offset } = useSelector(state => state.mainCryptoList);
    const { modalPurchaseCoin, modalAddToWatchList } = useSelector(state => state.modalState);
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
          
        },[dispatch, marketsList]);


      useEffect(() => {
        dispatch(setCurrentPage(currentCoin));
        if (currentCoin) {
          localStorage.setItem('currentCoin', currentCoin);
        }
      }, [currentCoin, dispatch]);



      const displayMarketsTable = (marketsList) => {
        if (marketsList) return (
          <>
            <MarketsTable currentCoin={currentCoin} data={marketsList}/>
            <Box display="flex" justifyContent="center" sx={{marginTop: '20px'}}>
                      <MainPagination/>  
            </Box>
          </>
        )
      }

    return (
        <>
            <AppBarHeader/>
            <ModalWrapper type="addToWatchList" toggle={modalAddToWatchList}/>
            <ModalWrapper type="purchaseCoin" toggle={modalPurchaseCoin} />
            
            {detailsData && <SingleCoinCard data={detailsData.data}/>}
            {wallet ? <HistoricalTrend wallet={wallet}/> : <CircularProgress size={150} />}
            {displayMarketsTable(marketsListToRender)}
            

        </>
        
    )
}

export default SingleCoinPage;