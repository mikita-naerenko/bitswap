import { Container } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchInput from './components/searchInput/SearchInput';
import AppBarCurrentPage from './components/AppBarCurrentPage';
import NavigationItems from './components/NavigationItems'; 
import NoticeDropDown from '../noticeBadge/NoticeDropDown';
import AccountMenuDropDown from './accountMenuDropDown/AccountMenuDropDownn';
import { useSelector } from 'react-redux';
import { PAGES_NAME } from './constants';

const  AppBarHeader = () => {

  const { currentPage } = useSelector(state => state.appBar);
  const { user } = useSelector(state => state.accountProfile)

  return (
    <Box sx={{ flexGrow: 1,}}>
      <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'space-between'}}>
          
          <AppBarCurrentPage currentPage={currentPage}/>
          <Box display={'flex'} flexGrow={1} justifyContent={'space-around'} alignItems={'center'} maxWidth={900}> 
              { 
                currentPage === PAGES_NAME.main ? <SearchInput/> : null
              }
              <NavigationItems/>
              <NoticeDropDown/>
              {
                currentPage !== PAGES_NAME.account ? <AccountMenuDropDown user={user}/> : null
              }
          </Box>

        </Toolbar>
      </AppBar>
      </Container>
    </Box>
  );
}

export default AppBarHeader;
