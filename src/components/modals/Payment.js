
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';

import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { replenishTheBalance } from '../../redux/AccountProfileSlice';
import { setModalPaymentDisplayed } from '../../redux/ModalStateSlice';
import { Formik, Form, useField } from 'formik';
import { validationSchema } from '../../schemes/validationScheme';


  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const years = Array.from({ length: 21 }, (_, index) => 2010 + index);


  const rendeOption = (data) => {
    return data.map(item => {
      return <MenuItem key={item} value={item}>{item}</MenuItem>
    })
  }
  
  
  const TextInput = ({...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
      <TextField {...field}{...props} />
       {meta.touched && meta.error ? (
      <Typography color="error">{meta.error}</Typography>
    ) : null}
      </>
    )
  }

  const SelectInput = ({...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
      <InputLabel>{props.label}</InputLabel>
      <Select {...field}{...props}>{props.options}</Select>
       {meta.touched && meta.error ? (
      <Typography color="error">{meta.error}</Typography>
    ) : null}
      </>
    )
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
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const payment = values.payment;
          console.log(`Balance has been replenished`);
          dispatch(replenishTheBalance(payment));
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
                               options={rendeOption(months)}
                               required
                               />
                  </Grid>
                  <Grid xs={6} md={3} sx={{ mt: -2.8 }}>
                    <SelectInput
                               fullWidth
                               label="Year"
                               name="year" 
                               options={rendeOption(years)}
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
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="contained" type="submit">
                REPLENISH THE BALANCE
              </Button>
            </CardActions>
          </Card>
        </Form>
      </Formik>
    );
  };
  
  export default Payment;