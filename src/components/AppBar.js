import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/AppBarSlice';

import Link from 'next/link';

export default function ButtonAppBar() {
  const mainCryptoListRef = useRef(null);
  const favoritesRef = useRef(null);
  const portfolioRef = useRef(null);
  const accountRef = useRef(null);
  const { currentPage } = useSelector(state => state.appBar)
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {currentPage}
          </Typography>
          <Box display={'flex'} flexGrow={1} justifyContent={'space-around'}> 
              {
                currentPage !== 'Main crypto-list' ? 
                  <Typography variant="h6" component="div" >
                  <Link href={`/`} ref={mainCryptoListRef} onClick={() => dispatch(setCurrentPage(mainCryptoListRef.current.textContent))}>Main crypto-list</Link>
                  </Typography> :
                  null
              }
              {
                currentPage !== 'Favorites' ? 
                  <Typography variant="h6" component="div" >
                  <Link href={`/favorites/`} ref={favoritesRef} onClick={() => dispatch(setCurrentPage(favoritesRef.current.textContent))}>Favorites</Link>
                  </Typography> :
                  null
              }
              {
                currentPage !== 'Portfolio' ? 
                  <Typography variant="h6" component="div" >
                  <Link href={`/portfolio/`} ref={portfolioRef} onClick={() => dispatch(setCurrentPage(portfolioRef.current.textContent))}>Portfolio</Link>
                  </Typography> :
                  null
              }
              {
                currentPage !== 'Account' ? 
                  <Typography variant="h6" component="div" >
                  <Link href={`/account/`} ref={accountRef} onClick={() => dispatch(setCurrentPage(accountRef.current.textContent))}>Account</Link>
                  </Typography> :
                  null
              }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
