import { useRouter } from 'next/router';
import AppBar from '../components/AppBar';
import { setCurrentPage } from '../redux/AppBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect }  from 'react';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../components/api';

const SingleCoinPage = () => {
    const {query} = useRouter();
    const { currentPage } = useSelector(state => state.appBar)
    const dispatch = useDispatch();
    const {
        data: detailsData,
        isLoading: detailsIsLoading,
        isError: detailsIsError,
      } = useGetCryptoDetailsQuery(query.singleCoinPage);
      
      const {
        data: historyData,
        isLoading: historyIsLoading,
        isError: historyIsError,
      } = useGetCryptoHistoryQuery({id: query.singleCoinPage, interval: 'd1'});
      console.log(query.singleCoinPage);

      useEffect(() => {
        const currentCoin = query.singleCoinPage || localStorage.getItem('currentCoin');
        dispatch(setCurrentPage(currentCoin));
        if (currentCoin) {
          localStorage.setItem('currentCoin', currentCoin);
        }
      }, [query.singleCoinPage]);

    return (
        <>
            <AppBar/>

            <h1>Single Coin Page</h1>

        </>
        
    )
}

export default SingleCoinPage;