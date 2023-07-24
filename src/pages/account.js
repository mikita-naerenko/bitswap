import AppBar from '../components/AppBar';
import AccountProfile from '../components/AccountProfile'
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import AccountBallance from '../components/AccountBallance';
import ModalWrapper from '../components/ModalWrapper';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/AccountProfileSlice';
import { setCurrentPage } from '../redux/AppBarSlice';
import { useEffect } from 'react';



// const user = {
//   avatar: '/assets/avatars/avatar-test-1.png',
//   city: '예산군',
//   country: '한국',
//   jobTitle: 'Senior Developer',
//   firstName: 'Mikita',
//   lastName: 'Naerenko',
//   timezone: 'GTM-7',
//   joined: '2023-07-20',
//   description: 'Hello World!',
//   balance: '100'
// };

const Account = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    // dispatch(setUser(user))
    // Set current page on refresh 
    dispatch(setCurrentPage((typeof window !== 'undefined' && sessionStorage.getItem('currentPage'))))
  },[])

  const { user: currentUser } = useSelector(state => state.accountProfile);
  const {modalPaymentDisplayed, modalEditProfileDisplayed } = useSelector(state => state.modalState);

    return (
        <>
              <>
        <AppBar/>
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
            <Typography variant="h4">
              Account
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={4}
              >
                <AccountProfile currentUser={currentUser}/>
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
                <AccountBallance currentUser={currentUser}/>
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