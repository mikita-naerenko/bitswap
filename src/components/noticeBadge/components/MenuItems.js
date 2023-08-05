import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import PaymentIcon from '@mui/icons-material/Payment';
import MoneyIcon from '@mui/icons-material/Money';
import Shop2Icon from '@mui/icons-material/Shop2';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BoltIcon from '@mui/icons-material/Bolt';
import ButtonRead from './ButtonRead';
import { ClickAwayListener } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

  const iconSwitcher = (type) => {
    switch (type) {
      case 'replenish':
        return <PaymentIcon/>;
      case 'price':
        return <PriceCheckIcon/>;
      case 'send':
        return <MoneyIcon/>;
      case 'purchase':
        return <Shop2Icon/>;
      case 'watch': 
        return <VisibilityIcon/>;
      case 'watchMatch':
        return <BoltIcon/>;
        default:
          return null;
    }
  }


const MenuItems = ({setAnchorEl, notifications, handleClickAway, noticeCount}) => {
    const handleClose = () => {
        setAnchorEl(null);
      };
    const noticeList = notifications.map((el) => {
      if (el.display) {
        const date = new Date(el.time)
        const dateString = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()} `
        return (
          <ClickAwayListener key={el.id} onClickAway={handleClickAway}>
          <MenuItem key={el.id} id={el.id} onClick={handleClose}>
                    <ListItemIcon>
                        {iconSwitcher(el.type)}
                    </ListItemIcon>
                    <ListItemText>
                        <Typography sx={{fontSize: '10px'}} variant='overline'>
                            {dateString}
                        </Typography>
                        <Typography noWrap>
                            {el.title}
                        </Typography>
                    </ListItemText>
              {<ButtonRead id={el.id}/>}
          </MenuItem>
          </ClickAwayListener>
        )
      } else {
        return null;
      }
        
      })


    return (
      noticeCount ? (
        <>
          {noticeList}
          <Divider />
          <MenuItem sx={{ color: 'primary.main' }}>
            <ListItemText sx={{ textAlign: 'center' }}>View All</ListItemText>
          </MenuItem>
        </>
      ) : (
        <ClickAwayListener onClickAway={handleClickAway}>
        <MenuItem>
          <ListItemText sx={{ textAlign: 'center' }}>No notifications</ListItemText>
        </MenuItem>
        </ClickAwayListener>
      )
      )


}

export default MenuItems;