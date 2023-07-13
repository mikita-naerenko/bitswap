import BasicTable from '../components/Table' 
import AppBar from '../components/AppBar';
import BasicPagination from '../components/Pagination';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useGetFavoriteCoinsQuery } from '../components/api';
import { useEffect } from 'react';
import { setCountForPagination } from '../redux/AppBarSlice';



const Favorites = () => {
    const dispatch = useDispatch();
    const { favoritesCoin, offset } = useSelector(state => state.mainCryptoList);
    const {data: favoriteCoinsList, isLoading, isError} = useGetFavoriteCoinsQuery(favoritesCoin);
    // Create a list to be rendered by using the offset value from Redux, which depends on the active button in the pagination
    const favoriteConsListToRender = favoriteCoinsList ? favoriteCoinsList.map(item => item.data).slice(offset, offset + 10): null;
    useEffect(() => {
        if (favoriteCoinsList) {
            // Update state of button's quantity for pagination in redux by lendth of favorite coins list
            dispatch(setCountForPagination(favoriteCoinsList.length));
        }
    })

    
    return (
        <>
            <AppBar/>
            <h1>Favorites</h1>
            {favoriteConsListToRender ? <BasicTable row={favoriteConsListToRender}/> : null}
            <Box display="flex" justifyContent="center" sx={{marginTop: '20px'}}>
                      <BasicPagination/>  
            </Box>
        </>
        
    )
}

export default Favorites;