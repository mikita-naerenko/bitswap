import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import { setCoinToAdd } from '../../redux/WatcherPriceSlice';
import { setModalAddToWatchList } from '../../redux/ModalStateSlice';




const ButtonAddToWatchList = ({coin}) => {
    const dispatch = useDispatch();
    const { modalAddToWatchList } = useSelector(state => state.modalState)
    const handleClick = (event) => {
        event.stopPropagation();
        dispatch(setModalAddToWatchList(!modalAddToWatchList));
        dispatch(setCoinToAdd(coin));
    }


    return (
        <Tooltip>
            <IconButton onClick={handleClick}>
                <VisibilityIcon/>
            </IconButton>
        </Tooltip>
    )
}

export default ButtonAddToWatchList;