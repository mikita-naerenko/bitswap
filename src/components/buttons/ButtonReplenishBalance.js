import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setModalPaymentDisplayed } from '../../redux/ModalStateSlice';


const ButtonReplenishBalance = () => {
    const dispatch = useDispatch();
    const { modalPaymentDisplayed } = useSelector(state => state.modalState);
    const handleClick = () => {
        dispatch(setModalPaymentDisplayed(!modalPaymentDisplayed))
    }

    return (
        <Button onClick={handleClick}>Top up</Button>
    )
}

export default ButtonReplenishBalance;