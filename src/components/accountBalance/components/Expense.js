
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';






const Expense = () => {



    return (
        <Box display="flex">
        <IconButton>
            <ArrowDownwardIcon color='warning'/>
        </IconButton>
        <Box>
                <Typography>
                    {'test data$1000'}
                </Typography>
                <Typography 
                        color="text.secondary"
                        variant="body2"
                        style={{opacity: '0.6'}}>
                    Expense
                </Typography>
        </Box>
    </Box>
    )
}

export default Expense;