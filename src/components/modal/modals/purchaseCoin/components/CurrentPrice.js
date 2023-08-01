import {
    Box,
    Unstable_Grid2 as Grid,
    Typography 
  } from '@mui/material';









const CurrentPrice = ({coinToPurchase}) => {
    return (
        <Grid xs={6} md={6}>
            <Box 
                display={'flex'}
                >
                <Typography>Current price:</Typography>
                <Typography>{coinToPurchase.priceUsd}</Typography>
            </Box>
        </Grid>
    )
}

export default CurrentPrice;