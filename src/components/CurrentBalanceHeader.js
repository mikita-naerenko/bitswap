import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Tooltip from '@mui/material/Tooltip';





const CurrentBalanceHeader = () => {
    const { user } = useSelector(state => state.accountProfile)

    return (
        <Tooltip title='Current balance'>
            <IconButton >
                <MonetizationOnIcon/>
                {user.balance}
            </IconButton>
        </Tooltip>
    )
}

export default CurrentBalanceHeader;