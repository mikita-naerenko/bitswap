import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { ClickAwayListener } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Link from 'next/link';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';




const AccountMenuItems = ({setAnchorEl, handleClickAway, user}) => {
    const handleClose = () => {
        setAnchorEl(null);
      };


    return (
        <>
        <ClickAwayListener onClickAway={handleClickAway}>
            <MenuItem id={'balance'} onClick={handleClose}>
                <ListItemIcon>
                    <MonetizationOnIcon/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{fontSize: '10px'}} variant='overline'>
                        Current balance: 
                    </Typography>
                </ListItemText>
                <Typography>
                        {user.balance}
                </Typography>
            </MenuItem>
        </ClickAwayListener>
        <ClickAwayListener onClickAway={handleClickAway}>
            <MenuItem id={'frozen'} onClick={handleClose}>
                <ListItemIcon>
                    <PauseCircleOutlineIcon/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{fontSize: '10px'}} variant='overline'>
                        Frozen amount:
                    </Typography>
                </ListItemText>
                <Typography>
                        {user.frozenBalance}
                </Typography>
            </MenuItem>
        </ClickAwayListener>
        <ClickAwayListener onClickAway={handleClickAway}>
            <MenuItem id={'frozen'} onClick={handleClose}>
                <Link href={`/watchlist`} scroll={true}>
                    <ListItemIcon>
                        <TroubleshootIcon/>
                    </ListItemIcon>
                </Link>
                <Link href={`/watchlist`} scroll={true} style={{flexGrow: 1}}>
                    <ListItemText>
                        <Typography sx={{fontSize: '10px'}} variant='overline'>
                            Watchlist
                        </Typography>
                    </ListItemText>
                </Link>   
            </MenuItem>
        </ClickAwayListener>    
            <Divider/>
        <ClickAwayListener onClickAway={handleClickAway}>
            <MenuItem id={'link-to-account'} onClick={handleClose}>
                <ListItemText sx={{ textAlign: 'center' }}>
                    <Link href={`/account`} scroll={true}>View all account details</Link>
                </ListItemText>
            </MenuItem>
        </ClickAwayListener>
        
        </>
      )


}

export default AccountMenuItems;