// import AppBar from '../components/AppBar';
import AppBarHeader from '../components/appBarHeader/AppBarHeader';
import MemoizedAccountProfile from '../components/AccountProfile'
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import AccountBallance from '../components/AccountBallance';
import ModalWrapper from '../components/ModalWrapper';
import TotalWalletChart from '../components/modules/TotalWalletChart';
import HistoricalTrend from '../components/modules/HistoricalTrend';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/AppBarSlice';
import { useEffect } from 'react';
import { useWebSocketUpdataCostOfWallet } from '../components/WebSocketWallet';


const Account = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set current page on refresh 
    dispatch(setCurrentPage((typeof window !== 'undefined' && sessionStorage.getItem('currentPage'))))
  },[])

  const { user: currentUser } = useSelector(state => state.accountProfile);
  const {modalPaymentDisplayed, modalEditProfileDisplayed } = useSelector(state => state.modalState);
  useWebSocketUpdataCostOfWallet(currentUser.wallet.idToRequest)
    return (
        <>
              <>
        <AppBarHeader/>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <ModalWrapper type="payment" toggle={modalPaymentDisplayed}/>
      <ModalWrapper type="editProfile" toggle={modalEditProfileDisplayed}/>
      
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={12}
              >
                <MemoizedAccountProfile currentUser={currentUser}/>
              </Grid>
              <Grid
                xs={12}
                md={6}
                sx={{ height: '100%' }}
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
          </div>
        </Stack>
        
        
      </Container>
      
    </Box>
  </>
        </>
    )
}

export default Account;