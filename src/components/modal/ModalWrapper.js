import SwitcherOfModalsWindow from "./switcher/SwitcherOfModalWindow";
import * as React from 'react';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import Modal from '@mui/base/Modal';
import { useDispatch } from 'react-redux';
import { setModalPaymentDisplayed, setModalEditProfileDisplayed, setModalPurchaseCoin, setModalAddToWatchList } from '../../redux/ModalStateSlice';
import { STYLED_MODAL, STYLED_BACKDROP, STYLE, TYPE_OF_MODAL } from './constants';


const ModalWrapper = ({type, toggle}) => {

    const dispatch = useDispatch();
    const handleClose = (type) => {
            //    Return reducer to close modal in depends props with modal value
        switch (type) {
            case TYPE_OF_MODAL.payment:
                return setModalPaymentDisplayed;
            case TYPE_OF_MODAL.editProfile:
                return setModalEditProfileDisplayed;
            case TYPE_OF_MODAL.purchaseCoin:
                return setModalPurchaseCoin;
            case TYPE_OF_MODAL.addToWatchList:
                return setModalAddToWatchList
            default:
                return null;
        }
    }
    return (
        <div>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={toggle}
          onClose={() => dispatch(handleClose(type)(!toggle))}
          slots={{ backdrop: StyledBackdrop }}
        >
          <Box sx={STYLE}>
                <SwitcherOfModalsWindow type={type}/>
          </Box>
        </StyledModal>
      </div>
    )
}

const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
      <div
        className={clsx({ 'MuiBackdrop-open': open }, className)}
        ref={ref}
        {...other}
      />
    );
  });

const StyledModal = styled(Modal)`${STYLED_MODAL}`;

const StyledBackdrop = styled(Backdrop)`${STYLED_BACKDROP}`;

export default ModalWrapper;