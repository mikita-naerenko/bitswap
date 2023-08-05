import {
    TextField,
    Typography 
  } from '@mui/material';

import {useField, useFormikContext } from 'formik';







const DesiredPriceInput = ({setDesiredPrice, ...props }) => {


        const [field, meta] = useField(props);
        const formik = useFormikContext();

        const handleAmountChange = (event) => {
          
            let inputValue = event.target.value;
            if (inputValue < 0) inputValue = 0;
            setDesiredPrice(inputValue);
            formik.setFieldValue('desiredPrice', inputValue);
            // const calculatedPriceInUsd = parseFloat(inputValue) * parseFloat(desiredPrice);
            // setCalculatedPrice(calculatedPriceInUsd);
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
export default DesiredPriceInput;