
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';






const Income = () => {



    return (
        <Box display="flex">
        <IconButton>
            <ArrowUpwardIcon color='success'/>
        </IconButton>
        <Box>
                <Typography>
                    {'test data$1000'}
                </Typography>
                <Typography 
                        color="text.secondary"
                        variant="body2"
                        style={{opacity: '0.6'}}>
                    Income
                </Typography>
        </Box>
    </Box>
    )
}

export default Income;