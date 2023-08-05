import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { Box, Typography } from '@mui/material';



const NoDataMessage = () => {


    return (
        <Box sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    mt: 10, 
                    opacity: 0.2}}>
            <Typography 
                        sx={{ fontSize: 34,  }} 
                        variant='h5' 
                        align='center'>
                                        No more data
            </Typography>
            <SentimentDissatisfiedIcon sx={{ fontSize: 100 }}/>
        </Box>  
    )
}

export default NoDataMessage;