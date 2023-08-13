import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux';
import { removeCoinFromWatchedCoins, addNotification } from '../../../redux/WatcherPriceSlice';
import { updateFrozenBalanceAfterRemoveFromWatchList } from '../../../redux/AccountProfileSlice';
import { createNoticeRemoveFromWatchList } from '../../../utils/createNotice';





const RemoveFromWatchListButton = ({data}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(removeCoinFromWatchedCoins(data.key));
        dispatch(addNotification(createNoticeRemoveFromWatchList(data)))
        data.autoBuying && dispatch(updateFrozenBalanceAfterRemoveFromWatchList(data))
    }

    return (
        <Tooltip title="Remove from watch list">
          <IconButton onClick={handleClick}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      );
}

export default RemoveFromWatchListButton;