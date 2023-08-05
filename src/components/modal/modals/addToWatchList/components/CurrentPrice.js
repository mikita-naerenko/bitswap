import {
    Box,
    Typography 
  } from '@mui/material';









const CurrentPrice = ({coinToPurchase}) => {
    return (
            <Box 
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                sx={{
                    bgcolor: 'primary.light',
                    borderRadius: 2 ,
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                }}
                >
                <Typography sx={{fontSize: '10px'}} 
                            variant='overline'
                            >
                    Current price:
                </Typography>
                <Typography sx={{fontSize: '20px'}}>
                    {Number(coinToPurchase.priceUsd).toFixed(2)}
                </Typography>
            </Box>
    )
}

export default CurrentPrice;