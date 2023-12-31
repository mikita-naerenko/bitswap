
import AppBarHeader from '../components/appBarHeader/AppBarHeader';
import MainTable from '../components/mainTable/MainTable';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import MainPagination from '../components/pagination/MainPagination';
import { useGetCryptoListQuery } from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCountForPagination, setCurrentPage } from '../redux/AppBarSlice';
import ModalWrapper from '../components/modal/ModalWrapper';


const Index = () => {
    const dispatch = useDispatch();
    const { offset } = useSelector(state => state.mainCryptoList);
    const { searchResults } = useSelector(state => state.appBar);
    const { modalPurchaseCoin, modalAddToWatchList } = useSelector(state => state.modalState);
    // Create a list to be render by using state value from Redux which depends of the active button in the pagination
    const searchResultsForRender = searchResults ? searchResults.data.slice(offset, offset + 10) : null;
    const { data, isLoading, isError } = useGetCryptoListQuery({offset},{pollingInterval: 10000,});
    useEffect(() => {
        // Set current page on refresh 
        dispatch(setCurrentPage((typeof window !== 'undefined' && sessionStorage.getItem('currentPage'))))
        dispatch(setCountForPagination(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
            <>
                <AppBarHeader/>
                <ModalWrapper type="purchaseCoin" toggle={modalPurchaseCoin}/>
                <ModalWrapper type="addToWatchList" toggle={modalAddToWatchList}/>
                <Container maxWidth="xl" sx={{marginTop: '20px'}}>
                    {isLoading ? <Box sx={{ display: 'flex', justifyContent: 'center'}}><CircularProgress size={100} /></Box> : null}
                    {isError ? <Box>Error...</Box> : null}
                    {data ? <MainTable row={searchResultsForRender ? searchResultsForRender : data.data}/> : null}
                    <Box display="flex" justifyContent="center" sx={{marginTop: '20px'}}>
                      <MainPagination/>  
                    </Box>
                    
                </Container>
                
                
            </>
       
        
    )
}

export default Index;