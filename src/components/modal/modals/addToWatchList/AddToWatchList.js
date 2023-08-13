import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Unstable_Grid2 as Grid
  } from '@mui/material';
import SubmitButton from './components/SubmitButton';
import AutoBuyingInput from './components/AutoBuyingInput';
import CurrentPrice from './components/CurrentPrice';
import OnAutoBuyingToggleTrue from './components/OnAutoBuyingToggleTrue';
import DesiredPriceInput from './components/DesiredPriceInput';
import { createNoticeForWatchList, createNoticeForWatchListAndAutoPurchase } from './helper';
import { useWebSocketSingleCoinPriceListener } from '../../../../services/WebSocket';

import { Formik, Form } from 'formik';
import { useState } from 'react';
import { validationSchemaAddToWatchList, validationSchemaAddToWatchAndAutoPurchaseList } from '../schemes/validationScheme';
import { useDispatch, useSelector } from 'react-redux';
import { addWatchedCoin } from '../../../../redux/WatcherPriceSlice';
import { addNewNotification, updateFrozenBalance } from '../../../../redux/AccountProfileSlice';
import { setModalAddToWatchList } from '../../../../redux/ModalStateSlice';
const { v4: uuidv4 } = require('uuid');


const AddToWatchList = () => {
    const [amount, setAmount] = useState(0);
    const [calculatedPrice, setCalculatedPrice] = useState(0);
    const [ desiredPrice, setDesiredPrice ] = useState(0);
    const [ autoBuyingToggle, setAutoBuyingToggle ] = useState(true);
   

    const dispatch = useDispatch();
    const { coinToAdd } = useSelector(state => state.watcherPrice);

    const [actualPrice, setActualPrice] = useState(coinToAdd.priceUsd);

    const { modalAddToWatchList } = useSelector(state => state.modalState);
    const { user } = useSelector(state => state.accountProfile);

    useWebSocketSingleCoinPriceListener(coinToAdd.id, setActualPrice);

    
    return (
        <Formik
        initialValues={{
            amount: '',
            desiredPrice: '',
            autoBuying: autoBuyingToggle,

          }}
          validationSchema={autoBuyingToggle ? validationSchemaAddToWatchAndAutoPurchaseList : validationSchemaAddToWatchList}
          onSubmit={(values, { resetForm }) => {
            const newData = {
                name: coinToAdd.name,
                id: coinToAdd.id,
                key: uuidv4(),
                date: new Date().getTime(),
                priceOnsubscription: actualPrice,
                desiredPrice: values.desiredPrice,
                autoBuying: values.autoBuying,
                amount: values.autoBuying ? values.amount : null,
                amountInUsd: values.autoBuying ? calculatedPrice : null,

            }
            dispatch(addWatchedCoin(newData));
            // Dispatch notice for watch list or auto buying
            newData.autoBuying 
            ? dispatch(addNewNotification(createNoticeForWatchListAndAutoPurchase(coinToAdd,newData)))
            : dispatch(addNewNotification(createNoticeForWatchList(coinToAdd,newData)))
            
            newData.autoBuying && dispatch(updateFrozenBalance(newData.amountInUsd))
            dispatch(setModalAddToWatchList(!modalAddToWatchList));
            resetForm();

          }}
        >
            <Form autoComplete="off" noValidate>
                <Card>
                    <CardHeader
                    subheader={`${coinToAdd.name}`}
                    title="Add To Watcher List"
                />
                    <CardContent sx={{ pt: 0 }}>
                        <Box sx={{ m: -1.5 }}>
                            <Grid container spacing={3}>
                                <Grid xs={6} md={6}>
                                    <DesiredPriceInput  
                                                        fullWidth
                                                        setDesiredPrice={setDesiredPrice}
                                                        actualPrice={actualPrice}
                                                        label="Desired Price"
                                                        name="desiredPrice" 
                                                        required/>
                                </Grid>
                                <Grid xs={6} md={6}>
                                    <CurrentPrice actualPrice={actualPrice}/>
                                </Grid>
                                <Grid xs={12} md={12}>
                                    <AutoBuyingInput 
                                                    setAutoBuyingToggle={setAutoBuyingToggle} 
                                                    checked={autoBuyingToggle} 
                                                    name="autoBuying"
                                                    />
                                </Grid>
                                {autoBuyingToggle 
                                ? <OnAutoBuyingToggleTrue                                                             
                                                            fullWidth
                                                            label={`Amount ${coinToAdd.symbol}`}
                                                            name="amount" 
                                                            value={amount}
                                                            coinToAdd={coinToAdd}
                                                            setAmount={setAmount}
                                                            setCalculatedPrice={setCalculatedPrice}
                                                            desiredPrice={desiredPrice}
                                                            user={user}
                                                            calculatedPrice={calculatedPrice}
                                                            required
                                                            /> 
                                : null}
                            </Grid>
                        </Box>
                    </CardContent>
                    <Divider />
                    <SubmitButton 
                                  autoBuyingToggle={autoBuyingToggle}
                                  user={user}
                                  calculatedPrice={calculatedPrice}
                                />
                </Card>
            </Form>
        </Formik>
    )
}

export default AddToWatchList