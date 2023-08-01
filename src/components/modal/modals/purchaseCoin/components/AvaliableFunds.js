import {
    Box,
    Unstable_Grid2 as Grid,
    Typography 
  } from '@mui/material';







const AvaliableFunds = ({user}) => {
    return (
        <Grid xs={6} md={6}>
        <Box 
            display={'flex'}
            >
            <Typography>Avaliable funds:</Typography>
            <Typography>{user.balance}</Typography>
        </Box>
    </Grid>
    )
}

export default AvaliableFunds;