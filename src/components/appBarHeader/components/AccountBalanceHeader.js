
import IconButton from '@mui/material/IconButton';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Tooltip from '@mui/material/Tooltip';





const AccountBalanceHeader = ({balance}) => {

    return (
        <Tooltip title='Current balance'>
            <IconButton >
                <MonetizationOnIcon/>
                {balance}
            </IconButton>
        </Tooltip>
    )
}

export default AccountBalanceHeader;