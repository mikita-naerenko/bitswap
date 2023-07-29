import BasicTable from '../components/Table' 
import AppBar from '../components/AppBar';
import BasicPagination from '../components/Pagination';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useGetFavoriteCoinsQuery } from '../components/api';
import { useEffect } from 'react';
import { setCountForPagination } from '../redux/AppBarSlice';
import { setOffset, setFavoriteCoinsList } from '../redux/MainCryptoListSlice';
import {useWebSocketListeners} from '../components/WebSocket';



const Favorites = () => {
    const dispatch = useDispatch();
    const { favoriteCoinsForRequest, offset, favoriteCoinsList } = useSelector(state => state.mainCryptoList);
    const { modalPurchaseCoin } = useSelector(state => state.modalState);
    const {data: favoriteCoinsListResponse, isLoading, isError} = useGetFavoriteCoinsQuery(favoriteCoinsForRequest);
    // Create a list to be rendered by using the offset value from Redux, which depends on the active button in the pagination
    const favoriteConsListToRender = favoriteCoinsList ? favoriteCoinsList.map(item => item).slice(offset, offset + 10): null;
    const favoriteCoinsListTest = favoriteCoinsListResponse && favoriteCoinsListResponse.map(item => item.data);
    useEffect(() => {
        if (favoriteCoinsListResponse) {
            // Update state of button's quantity for pagination in redux by lendth of favorite coins list
            dispatch(setCountForPagination(favoriteCoinsListResponse.length));
            dispatch(setFavoriteCoinsList(favoriteCoinsListTest));
            dispatch(setOffset(0));
        }
    },[favoriteCoinsListResponse])

    
    useWebSocketListeners(favoriteCoinsForRequest);
    
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