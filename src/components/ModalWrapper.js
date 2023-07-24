import SwitcherOfModalsWindow from "./SwitcherOfModalWindow";
import * as React from 'react';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import Modal from '@mui/base/Modal';
import { useDispatch } from 'react-redux';
import { setModalPaymentDisplayed, setModalEditProfileDisplayed, setModalPurchaseCoin } from '../redux/ModalStateSlice';



const ModalWrapper = ({type, toggle}) => {

    const dispatch = useDispatch();
    const handleClose = (type) => {
            //    Return reducer to close modal in depends props with modal value
        switch (type) {
            case 'payment':
                return setModalPaymentDisplayed;
            case 'editProfile':
                return setModalEditProfileDisplayed;
            case 'purchaseCoin':
                return setModalPurchaseCoin
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
          <Box sx={style}>
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

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 600,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});

export default ModalWrapper;