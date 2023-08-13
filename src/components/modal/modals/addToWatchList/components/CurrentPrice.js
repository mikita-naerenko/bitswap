import {
    Box,
    Typography 
  } from '@mui/material';









const CurrentPrice = ({actualPrice}) => {
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
                    Actual price:
                </Typography>
                <Typography sx={{fontSize: '20px'}}>
                    {Number(actualPrice).toFixed(2)}
                </Typography>
            </Box>
    )
}

export default CurrentPrice;