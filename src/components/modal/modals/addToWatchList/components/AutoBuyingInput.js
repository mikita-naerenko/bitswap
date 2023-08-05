import { useField, useFormikContext } from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';





const AutoBuyingInput = ({ setAutoBuyingToggle, checked, ...props}) => {
    const [field] = useField(props);
    const formik = useFormikContext();
    
    const handleChange = (event) => {
      let inputValue = event.target.checked;
      setAutoBuyingToggle(inputValue)
      formik.setFieldValue('autoBuying', inputValue);
    }
    return (
      <>
      <FormControlLabel 
                        control={
                                 <Switch onChange={handleChange}  checked={checked} {...props}/>
                                } 
                        label="auto purchase" />
      </>
    )
  }

export default AutoBuyingInput;