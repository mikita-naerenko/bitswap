import {
    Typography,
  } from '@mui/material';
import DynamicColorArrow from './dynamicColorArrow/DynamicColorArrow';



const Title = ({total}) => {
    return (
        <>
            <Typography>Total capitalization of your assets in USD:</Typography>
            <Typography variant="h6" sx={{ml:1}}>{total.toFixed(2)}$</Typography><DynamicColorArrow value={total}/>
        </>
    )
}

export default Title;