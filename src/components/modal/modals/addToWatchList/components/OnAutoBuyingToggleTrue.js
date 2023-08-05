import CompareWithBalance from "./CompareWithBalance";
import AmountInput from "./AmountInput";
import AvaliableFunds from "./AvaliableFunds";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

import { Unstable_Grid2 as Grid, Typography } from '@mui/material';






const OnAutoBuyingToggleTrue = ({ coinToAdd, amount, setAmount, setCalculatedPrice, desiredPrice, user, calculatedPrice}) => {


    return (
        <>
            <Grid xs={12} md={12}>
                <AvaliableFunds user={user}/>
                <Typography sx={{fontSize: 12, opacity: 0.7}}>
                    <PriorityHighIcon 
                                      sx={{fontSize: 12, color: 'red'}}/>
                    After adding to the auto purchase list, the amount of the deal will be frozen and reserved from your balance.
                </Typography>
            </Grid>
            <Grid xs={6} md={6}>
                <AmountInput
                                        fullWidth
                                        label={`Amount ${coinToAdd.symbol}`}
                                        name="amount" 
                                        value={amount}
                                        setAmount={setAmount}
                                        setCalculatedPrice={setCalculatedPrice}
                                        desiredPrice={desiredPrice}
                                        required/>
            </Grid>
            <Grid xs={6} md={6}>
                <CompareWithBalance
                                    user={user}
                                    calculatedPrice={calculatedPrice}/>
            </Grid>
     </>
    )

}

export default OnAutoBuyingToggleTrue;