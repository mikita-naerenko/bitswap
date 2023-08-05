
import IconButton from '@mui/material/IconButton';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import Tooltip from '@mui/material/Tooltip';
import { Box } from '@mui/material';




const AccountBalanceHeader = ({user}) => {

    return (
        <Box display={'flex'} flexDirection={'column'}>
        <Tooltip title='Current balance' >
            <IconButton  sx={{fontSize: '18px'}}>
                <MonetizationOnIcon/>
                {user.balance}
            </IconButton>     
        </Tooltip>
        <Tooltip title='Frozen amount for auto purchase'>
            <IconButton sx={{fontSize: '12px'}}>
                <PrecisionManufacturingIcon/>
                {Number(user.frozenBalance).toFixed(2)}
            </IconButton>
        </Tooltip>
        </Box>
    )
}

export default AccountBalanceHeader;