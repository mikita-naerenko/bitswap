import { Box, Container, Stack, Unstable_Grid2 as Grid } from '@mui/material';

import AppBarHeader from '../components/appBarHeader/AppBarHeader';
import AccountProfile from '../components/accountProfile/AccountProfile';
import AccountBallance from '../components/accountBalance/AccountBalance';
import ModalWrapper from '../components/modal/ModalWrapper';
import TotalWalletChart from '../components/totalWalletChart/TotalWalletChart';
import HistoricalTrend from '../components/historicalTrend/HistoricalTrend';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/AppBarSlice';
import { useEffect } from 'react';
import { useWebSocketUpdataCostOfWallet } from '../services/WebSocketWallet';


const Account = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set current page on refresh 
    dispatch(setCurrentPage((typeof window !== 'undefined' && sessionStorage.getItem('currentPage'))))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const { user: currentUser } = useSelector(state => state.accountProfile);
  const {modalPaymentDisplayed, modalEditProfileDisplayed } = useSelector(state => state.modalState);
  useWebSocketUpdataCostOfWallet(currentUser.wallet.idToRequest)
    return (
              <>
    <AppBarHeader/>
    <Box component="main"
         sx={{
              flexGrow: 1,
              py: 8
            }}
    >
      <ModalWrapper type="payment" toggle={modalPaymentDisplayed}/>
      <ModalWrapper type="editProfile" toggle={modalEditProfileDisplayed}/>
      
      <Container maxWidth="lg">
        <Stack spacing={3}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={12}
              >
                <AccountProfile currentUser={currentUser}/>
              </Grid>
              <Grid
                xs={12}
                md={6}
                sx={{ height: 'auto' }}
              >
                <AccountBallance currentUser={currentUser}/>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TotalWalletChart wallet={currentUser.wallet}/>
              </Grid>
              <Grid
                xs={12}
                md={12}
              >
                <HistoricalTrend wallet={currentUser.wallet}/>
              </Grid>
            </Grid>
        </Stack>
      </Container>
      
    </Box>
  </>
    )
}

export default Account;