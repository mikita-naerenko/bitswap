import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Unstable_Grid2 as Grid,
  } from '@mui/material';
import TextInput from './components/TextInput';
import CompareWithBalance from './components/CompareWithBalance';
import SubmitButton from './components/SubmitButton';
import AvaliableFunds from './components/AvaliableFunds';
import CurrentPrice from './components/CurrentPrice';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form} from 'formik';
import { validationSchemaPurchaseCoin }from '../schemes/validationScheme';
import { useState } from 'react';
import { writeOffBalance, addCoinOnWallet, updateIdToRequest, addNewNotification } from '../../../../redux/AccountProfileSlice';
import { setModalPurchaseCoin } from '../../../../redux/ModalStateSlice';
const { v4: uuidv4 } = require('uuid');



const PurchaseCoin = () => {
    const dispatch = useDispatch();
    const { coinToPurchase } = useSelector(state => state.mainCryptoList)
    const { modalPurchaseCoin } = useSelector(state => state.modalState)
    const { user } = useSelector(state => state.accountProfile);
    const [amount, setAmount] = useState('');
    const [calculatedPrice, setCalculatedPrice] = useState(0);



    return (
        <Formik
        initialValues={{
          amount: '',
        }}
        validationSchema={validationSchemaPurchaseCoin}
        onSubmit={(values, { resetForm }) => {
          const newCoin = {
            coin: coinToPurchase.name,
            valueCoin: Number(values.amount),
            label: coinToPurchase.symbol,
            id: coinToPurchase.id,
            priceUsd: coinToPurchase.priceUsd,
          }
          const writeOffFunds = calculatedPrice.toFixed(2);

          if (Number(writeOffFunds) < Number(user.balance)) {
            dispatch(addCoinOnWallet(newCoin));
            dispatch(writeOffBalance(writeOffFunds));
            dispatch(setModalPurchaseCoin(!modalPurchaseCoin));
            dispatch(updateIdToRequest(coinToPurchase.id));
            dispatch(addNewNotification({ time: new Date().getTime(),
                                          id: uuidv4(),
                                          type: 'purchase',
                                          text: `${newCoin.coin} has been purchased`,
                                          display: true,
            }))
            resetForm();
          }
          
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
                    <CurrentPrice coinToPurchase={coinToPurchase}/>
                    <AvaliableFunds user={user}/>
                  <Grid xs={12} md={6}>
                    <TextInput
                               fullWidth
                               label={`Amount ${coinToPurchase.symbol}`}
                               name="amount" 
                               value={amount}
                               setAmount={setAmount}
                               setCalculatedPrice={setCalculatedPrice}
                               coinToPurchase={coinToPurchase}
                               required
                               />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <CompareWithBalance
                                        user={user}
                                        calculatedPrice={calculatedPrice}
                                      />
                    </Grid>
                </Grid>
              </Box>
            </CardContent>
          <SubmitButton/>
          </Card>
        </Form>
      </Formik>
    )
}

export default PurchaseCoin;