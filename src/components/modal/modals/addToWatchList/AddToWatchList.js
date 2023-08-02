import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography,
    Unstable_Grid2 as Grid
  } from '@mui/material';
import SubmitButton from './components/SubmitButton';
import TextInput from './components/TextInput';
import { Formik, Form } from 'formik';
import { validationSchemaAddToWatchList } from '../schemes/validationScheme';
import { useDispatch, useSelector } from 'react-redux';
import { addWatchedCoin } from '../../../../redux/WatcherPriceSlice';
import { addNewNotification } from '../../../../redux/AccountProfileSlice';
import { setModalAddToWatchList } from '../../../../redux/ModalStateSlice';
const { v4: uuidv4 } = require('uuid');




const AddToWatchList = () => {
    const dispatch = useDispatch();
    const { coinToAdd } = useSelector(state => state.watcherPrice);
    const { modalAddToWatchList } = useSelector(state => state.modalState);
    return (
        <Formik
        initialValues={{
            desiredPrice: '',

          }}
          validationSchema={validationSchemaAddToWatchList}
          onSubmit={(values, { resetForm }) => {
            const newData = {
                name: coinToAdd.name,
                id: coinToAdd.id,
                priceOnsubscription: coinToAdd.priceUsd,
                desiredPrice: values.desiredPrice
            }
            console.log(newData);
            dispatch(addWatchedCoin(newData));
            dispatch(addNewNotification({ 
                                            time: new Date().getTime(),
                                            id: uuidv4(),
                                            type: 'watch',
                                            text: `"${coinToAdd.name}" added to watch list`,
                                            display: true,
              }))
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
                                    <TextInput
                                                fullWidth
                                                label="Desired Price"
                                                name="desiredPrice" 
                                                required
                                            />
                                </Grid>
                                <Grid xs={6} md={6}>
                                    <Box>
                                        <Typography>Current Price</Typography>
                                        <Typography>{Number(coinToAdd.priceUsd).toFixed(2)}$</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                    <Divider />
                    <SubmitButton/>
                </Card>
            </Form>
        </Formik>
    )
}

export default AddToWatchList