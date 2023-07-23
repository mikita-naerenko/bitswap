import AppBar from '../components/AppBar';
import BasicTable from '../components/Table' 
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BasicPagination from '../components/Pagination';
import { useGetCryptoListQuery } from '../components/api';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCountForPagination } from '../redux/AppBarSlice';
import ModalWrapper from '../components/ModalWrapper';


const Index = () => {
    const dispatch = useDispatch();
    const { offset } = useSelector(state => state.mainCryptoList);
    const { searchResults } = useSelector(state => state.appBar);
    const { modalPurchaseCoin } = useSelector(state => state.modalState);
    // Create a list to be render by using state value from Redux which depends of the active button in the pagination
    const searchResultsForRender = searchResults ? searchResults.data.slice(offset, offset + 10) : null;
    const { data, isLoading, isError } = useGetCryptoListQuery({offset},{pollingInterval: 10000,});
    useEffect(() => {
        dispatch(setCountForPagination(0));
    },[])
    return (
            <>
                <AppBar/>
                <ModalWrapper type="purchaseCoin" toggle={modalPurchaseCoin}/>
                <Container maxWidth="xl" sx={{marginTop: '20px'}}>
                    {data ? <BasicTable row={searchResultsForRender ? searchResultsForRender : data.data}/> : null}
                    <Box display="flex" justifyContent="center" sx={{marginTop: '20px'}}>
                      <BasicPagination/>  
                    </Box>
                    
                </Container>
                
                
            </>
       
        
    )
}

export default Index;