import { Box, Typography, } from '@mui/material';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';

import { FILTER_ITEMS_OBJ } from './constants';

import FilterMenu from './components/FilterMenu';
import ListItems from './components/ListItems';




const History = () => {
  const { user } = useSelector(state => state.accountProfile);
  const { filter } = useSelector(state => state.history);
  const { notifications: watcherNotifications } = useSelector(state => state.watcherPrice);
  const allNotificationsArr = user.notifications.concat(watcherNotifications).sort((a,b) => {
    if (a.display === b.display) {
        return b.time - a.time
    } else {
      return  a.display ? -1 : 1;
    } 
  })
  const filteringNoticesArray = (filter,notices) => {
    if (filter === FILTER_ITEMS_OBJ.all) {
        return notices;
    } else {
        return notices.filter(notice => notice.type === filter)
    }
  }

  const filteredNoticesArray = filteringNoticesArray(filter,allNotificationsArr);

 
    return (
        <Box sx={{ width: '100%', minHeight: '300px', position: 'relative', }}>
            <FilterMenu sx={{position: 'absolute', top: 0, right: 0}}/>
            <Typography variant='h6' sx={{
                                textAlign: 'center',
                                fontSize: '24px',
                                
            }}>
                    Account history
            </Typography>
            <List sx={{ width: '100%' }}>
                <ListItems filteredNoticesArray={filteredNoticesArray}/>
            </List>

      </Box>
    )
}

export default History;