import {
    Box,
    Typography 
  } from '@mui/material';







const AvaliableFunds = ({user}) => {
    return (

        <Box 
            display={'flex'}
            justifyContent={'space-between'}
            >
            <Typography 
                        sx={{fontSize: '20px'}} 
                        variant='overline'
                        >
                Avaliable funds:
            </Typography>
            <Typography 
                        sx={{fontSize: '20px', mr: 10}} 
                        variant='overline'
                        >
                ${Number(user.balance).toFixed(2)}
            </Typography>
        </Box>

    )
}

export default AvaliableFunds;