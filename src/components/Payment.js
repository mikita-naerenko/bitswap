import { useCallback } from 'react';
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
import { setModalPaymentDisplayed, replenishTheBalance } from '../redux/AccountProfileSlice';
import { Formik, Form, useField, Field } from 'formik';
import * as Yup from 'yup';
import { useRef, useState }  from 'react';


const validationSchema = Yup.object({
    cardholdersname: Yup.string().matches(/^[A-Za-z]+ [A-Za-z]+$/, 'Cardholders name must be like "John Doe"').required('Field is required'),
    month: Yup.string().required('Field is required'),
    year: Yup.string().required('Field is required'),
    cardnumber: Yup.string().matches(/^\d{13,19}$/, 'Enter correct card number').required('Field is required'),
    cvv: Yup.string().matches(/^\d{3}$/, 'Enter correct CVV'),
    payment: Yup.string().matches(/^\d+(\.\d{1,2})?$/, 'Enter correct amount').required('Enter the amount you want to deposit into your account'),
  });

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
    const { user: currentUser, modalPaymentDisplayed } = useSelector((state) => state.accountProfile);
  
  
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
          // Handle form submission logic here
          const newData = { ...values}
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