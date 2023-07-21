import * as React from 'react';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import Modal from '@mui/base/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setModalPaymentDisplayed } from '../redux/AccountProfileSlice';
import Payment from './Payment';



const ModalPayment = () => {
    const dispatch = useDispatch();
    const { modalPaymentDisplayed } = useSelector(state => state.accountProfile);
    return (
        <div>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={modalPaymentDisplayed}
          onClose={() => dispatch(setModalPaymentDisplayed(!modalPaymentDisplayed))}
          slots={{ backdrop: StyledBackdrop }}
        >
          <Box sx={style}>
                <Payment/>
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


export default ModalPayment;