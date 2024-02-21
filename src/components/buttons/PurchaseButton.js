import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCoinToPurchase } from '../../redux/MainCryptoListSlice';
import { setModalPurchaseCoin } from '../../redux/ModalStateSlice';



const PurchaseButton = ({coin}) => {

    const dispatch = useDispatch();
    const { modalPurchaseCoin } = useSelector(state => state.modalState);
    const handleClick = useCallback((event) => {
        event.stopPropagation();
        dispatch(setModalPurchaseCoin(!modalPurchaseCoin));
        dispatch(setCoinToPurchase(coin));
      }, [coin, dispatch, modalPurchaseCoin]);

    return (
        <Tooltip title='Buy now!' style={{zIndex: '2'}}>
            <IconButton onClick={handleClick}>
                <ShoppingBagIcon fontSize='small'/>
            </IconButton>
        </Tooltip>
    )

}


export default PurchaseButton;