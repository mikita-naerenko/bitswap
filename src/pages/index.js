import AppBar from '../components/AppBar';
import BasicTable from '../components/Table' 
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BasicPagination from '../components/Pagination';
import { useGetCryptoListQuery } from '../components/api';
import { useSelector } from 'react-redux';


const Index = () => {
    const { offset } = useSelector(state => state.mainCryptoList);
    const { searchResults } = useSelector(state => state.appBar);
    const searchResultsForRender = searchResults ? searchResults.data.slice(offset, offset + 10) : null;
    const { data, isLoading, isError } = useGetCryptoListQuery({offset});
    return (
            <>
                <AppBar/>
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