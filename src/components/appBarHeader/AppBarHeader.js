
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchInput from './components/searchInput/SearchInput';
import AppBarCurrentPage from './components/AppBarCurrentPage';
import AccountBalanceHeader from './components/AccountBalanceHeader';
import NavigationItems from './components/NavigationItems'; 
import { useSelector } from 'react-redux';
import { PAGES_NAME } from './constants';

const  AppBarHeader = () => {

  const { currentPage } = useSelector(state => state.appBar);
  const { user } = useSelector(state => state.accountProfile)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AppBarCurrentPage currentPage={currentPage}/>
          <Box display={'flex'} flexGrow={1} justifyContent={'space-around'} alignItems={'center'}> 
              { 
                currentPage === PAGES_NAME.main ? <SearchInput/> : null
              }
              <NavigationItems/>
              {
                currentPage !== PAGES_NAME.account ? <AccountBalanceHeader balance={user.balance}/> : null
              }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarHeader;
