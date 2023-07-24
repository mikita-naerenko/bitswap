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
import { Formik, Form, useField, useFormikContext } from 'formik';
import { validationSchema }from '../../schemes/validationScheme';
import { useState } from 'react';
import { writeOffBalance, addCoinOnWallet } from '../../redux/AccountProfileSlice';
import { setModalPurchaseCoin } from '../../redux/ModalStateSlice';




// const TextInput = ({...props }) => {
//     const [field, meta] = useField(props);
//     const formik = useFormikContext();
//     return (
//       <>
//       <TextField {...field}{...props}/>
//        {meta.touched && meta.error ? (
//       <Typography color="error">{meta.error}</Typography>
//     ) : null}
//       </>
//     )
//   }



const PurchaseCoin = () => {
    const dispatch = useDispatch();
    const { coinToPurchase } = useSelector(state => state.mainCryptoList)
    const { modalPurchaseCoin } = useSelector(state => state.modalState)
    const { user } = useSelector(state => state.accountProfile);
    const [amount, setAmount] = useState('');
    const [calculatedPrice, setCalculatedPrice] = useState(0);

    const TextInput = ({...props }) => {


        const [field, meta] = useField(props);
        const formik = useFormikContext();

        const handleAmountChange = (event) => {
            let inputValue = event.target.value;
            if (inputValue < 0) inputValue = 0
            setAmount(inputValue);
            formik.setFieldValue('amount', inputValue);
            const calculatedPriceInUsd = parseFloat(inputValue) * parseFloat(coinToPurchase.priceUsd);
            setCalculatedPrice(calculatedPriceInUsd);
        }
        return (
          <>
          <TextField {...field}{...props} onChange={handleAmountChange}/>
           {meta.touched && meta.error ? (
          <Typography color="error">{meta.error}</Typography>
        ) : null}
          </>
        )
      }

    

// const handleAmountChange = (event) => {
//         let inputValue = event.target.value;
//         if (inputValue < 0) inputValue = 0
//         setAmount(inputValue);
//         formik.setFieldValue('amount', inputValue);
//         const calculatedPriceInUsd = parseFloat(inputValue) * parseFloat(coinToPurchase.priceUsd);
//         setCalculatedPrice(calculatedPriceInUsd);
//     }



    return (
        <Formik
        initialValues={{
          amount: ''
        }}
        // Disable to submit without validation
        // validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const newCoin = {
            coin: coinToPurchase.name,
            amount: values.amount
          }
          const writeOffFunds = calculatedPrice.toFixed(2);
          dispatch(addCoinOnWallet(newCoin));
          dispatch(writeOffBalance(writeOffFunds));
          dispatch(setModalPurchaseCoin(!modalPurchaseCoin));
          resetForm();
        }}
        
      >
        <Form autoComplete="off" noValidate>
          <Card>
            <CardHeader
              subheader={`Buy ${coinToPurchase.name}`}
              title="Fast Trade"
            />
            <CardContent sx={{ pt: 0 }}>
              <Box sx={{ m: -1.5 }}>
                  <Grid container spacing={3}>
                    <Grid xs={6} md={6}>
                        <Box 
                            display={'flex'}
                            >
                            <Typography>Current price:</Typography>
                            <Typography>{coinToPurchase.priceUsd}</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6} md={6}>
                        <Box 
                            display={'flex'}
                            >
                            <Typography>Avaliable funds:</Typography>
                            <Typography>{user.balance}</Typography>
                        </Box>
                    </Grid>
                  <Grid xs={12} md={6}>
                    <TextInput
                               fullWidth
                               label={`Amount ${coinToPurchase.symbol}`}
                               name="amount" 
                               value={amount}
                               type="number"
                               required
                               />
                  </Grid>
                  <Grid xs={12} md={6}>
                            <Typography height={'100%'}
                                        sx={{
                                            bgcolor: 'primary.light',
                                            borderRadius: 2 ,
                                            display: 'flex', justifyContent: 'center', alignItems: 'center', 
                                        }}
                                        style={Number(user.balance)< calculatedPrice ? {backgroundColor: '#f6685e'} : null}
                                        >
                                        {
                                            Number(user.balance) > calculatedPrice 
                                            ? `In USD: ${calculatedPrice ? calculatedPrice.toFixed(2) : "Enter amount"}`
                                            : 'insufficient funds'
                                        }
                            </Typography>
                    </Grid>

                </Grid>
              </Box>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="contained" type="submit">
                BUY
              </Button>
            </CardActions>
          </Card>
        </Form>
      </Formik>
    )
}

export default PurchaseCoin;