import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux';
import { updateNotificationState } from '../../../redux/AccountProfileSlice';
import { updateWatcherNotification } from '../../../redux/WatcherPriceSlice';



const ButtonRead = ({id}) => {
    const dispatch = useDispatch();
    const handleClick = (event) => {
        event.stopPropagation();
        dispatch(updateNotificationState(id));
        dispatch(updateWatcherNotification(id))
    }

    return (
        <Tooltip title='Mark as read'>
            <IconButton onClick={handleClick}>
                <MarkChatReadIcon/>
            </IconButton>
        </Tooltip>
    )
}

export default ButtonRead;