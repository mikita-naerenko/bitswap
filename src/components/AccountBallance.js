import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useDispatch, useSelector } from 'react-redux';
import { setModalPaymentDisplayed } from '../redux/AccountProfileSlice';


const AccountBallance = ({currentUser}) => {
    const dispatch = useDispatch();
    const { modalPaymentDisplayed } = useSelector(state => state.accountProfile);
    return (
        <Card>
            <CardContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                    <Typography
                                color="text.secondary"
                                variant="body2"
                                style={{ textTransform: 'uppercase' }}
                            >
                                Balance details:
                    </Typography>
                    <Typography
                                gutterBottom
                                variant="h4">

                                {currentUser.balance}$
                    </Typography>
                    <CardActions>
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
                                <Box display="flex">
                                    <IconButton>
                                        <ArrowDownwardIcon color='warning'/>
                                    </IconButton>
                                    <Box>
                                            <Typography>
                                                {'test data$500'}
                                            </Typography>
                                            <Typography 
                                                    color="text.secondary"
                                                    variant="body2"
                                                    style={{opacity: '0.6'}}>
                                                Expense
                                            </Typography>
                                    </Box>
                                </Box>
                    </CardActions>
                    <CardActions>
                        <Button>Receive</Button>
                        <Button>Send</Button>
                        <Button onClick={() => dispatch(setModalPaymentDisplayed(!modalPaymentDisplayed))}>Top up</Button>
                    </CardActions>
                </Box>
            </CardContent>
        </Card>
    )
}

export default AccountBallance;