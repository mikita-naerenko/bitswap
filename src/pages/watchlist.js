import AppBarHeader from "../components/appBarHeader/AppBarHeader";
import WatchListTable from "../components/watchlistTable/WatchListTable";
import { Container } from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/AppBarSlice';
import { useEffect } from 'react';




const WatchList = () => {
    const dispatch = useDispatch();
    const { watchedCoins } = useSelector(state => state.watcherPrice);

    useEffect(() => {
        dispatch(setCurrentPage('watchlist'));
    },[])

    return (
        <>
            <AppBarHeader/>
            <Container maxWidth="xl" sx={{mt: 3}}>
            <WatchListTable data={watchedCoins}/>
            </Container>
        </>
    )
}

export default WatchList;