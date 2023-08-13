import {
    TextField,
    Typography 
  } from '@mui/material';

import {useField, useFormikContext } from 'formik';
import { useState } from 'react';

const DesiredPriceInput = ({setDesiredPrice, actualPrice, ...props }) => {

        const [ customError, setCustomError ] = useState(false)
        const [field, meta] = useField(props);
        const formik = useFormikContext();
        const handleAmountChange = (event) => {
          
            let inputValue = event.target.value;
            if (inputValue > Number(actualPrice)) {
              setCustomError('Desired price cannot be higher than the current price.')
              inputValue = 0;
            }

            if (inputValue < 0) {
              inputValue = 0;
            };

            setDesiredPrice(inputValue);
            formik.setFieldValue('desiredPrice', inputValue);

        }
        return (
          <>
          <TextField {...field}{...props} onChange={handleAmountChange}/>
           {(meta.touched && meta.error) || customError ? (
          <Typography color="error">{meta.error || customError}</Typography>
        ) : null}
          </>
        )
      }
export default DesiredPriceInput;