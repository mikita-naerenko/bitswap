
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  MenuItem,
  Unstable_Grid2 as Grid
} from '@mui/material';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import SubmitButton from './components/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { replenishTheBalance, addNewNotification } from '../../../../redux/AccountProfileSlice';
import { setModalPaymentDisplayed } from '../../../../redux/ModalStateSlice';
import { Formik, Form } from 'formik';
import { validationSchemaPayment } from '../schemes/validationScheme';
import { MONTHS, YEARS } from './constants';
const { v4: uuidv4 } = require('uuid');

  const rendeOption = (data) => {
    return data.map(item => {
      return <MenuItem key={item} value={item}>{item}</MenuItem>
    })
  }
  



const Payment = () => {
    const dispatch = useDispatch();
    const {modalPaymentDisplayed } = useSelector((state) => state.modalState);
  
    return (
      <Formik
        initialValues={{
          cardholdersname: '',
          month: '',
          year: '',
          cardnumber: '',
          cvv: '',
          payment: '',
        }}
        validationSchema={validationSchemaPayment}
        onSubmit={(values, { resetForm }) => {
          const payment = values.payment;
          console.log(`Balance has been replenished`);
          dispatch(replenishTheBalance(payment));
          dispatch(addNewNotification({ 
                                        time: new Date().getTime(),
                                        id: uuidv4(),
                                        type: 'replenish',
                                        title: 'Top up balance',
                                        textContent: `The balance was replenished by $${payment}`,
                                        display: true,
                                      }

          ))
          resetForm();
          dispatch(setModalPaymentDisplayed(!modalPaymentDisplayed))
        }}
      >
        <Form autoComplete="off" noValidate>
          <Card>
            <CardHeader
              subheader="Top up balance"
              title="Payment"
            />
            <CardContent sx={{ pt: 0 }}>
              <Box sx={{ m: -1.5 }}>
                <Grid container spacing={3}>
                  <Grid xs={12} md={6}>
                    <TextInput
                               fullWidth
                               label="Cardholders Name"
                               name="cardholdersname" 
                               required
                               />
                  </Grid>
                  <Grid xs={6} md={3} sx={{ mt: -2.8 }}>
                    <SelectInput
                               fullWidth
                               helpertext='1'
                               label="Month"
                               name="month" 
                               options={rendeOption(MONTHS)}
                               required
                               />
                  </Grid>
                  <Grid xs={6} md={3} sx={{ mt: -2.8 }}>
                    <SelectInput
                               fullWidth
                               label="Year"
                               name="year" 
                               options={rendeOption(YEARS)}
                               required
                               />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextInput
                               fullWidth
                               label="Card Number"
                               name="cardnumber" 
                               required
                               />
                  </Grid>
                  <Grid xs={12} md={3}>
                    <TextInput
                               fullWidth
                               label="CVV"
                               name="cvv" 
                               required
                               />
                  </Grid>
                  <Grid xs={12} md={12}>
                    <TextInput
                               fullWidth
                               label="Enter the amount you want to deposit into your account"
                               name="payment" 
                               required
                               />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            <Divider />
            <SubmitButton/>
          </Card>
        </Form>
      </Formik>
    );
  };
  
  export default Payment;