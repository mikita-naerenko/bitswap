import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonReplenishBalance from './components/ButtonReplenishBalance';
import Income from './components/Income';
import Expense from './components/Expense';

const AccountBallance = ({currentUser}) => {

    return (
        <Card style={{height: "100%"}}>
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

                                {Number(currentUser.balance).toFixed(2)}$
                    </Typography>
                    <CardActions>
                        <Income/>
                        <Expense/>
                    </CardActions>
                    <CardActions>
                        <Button>Receive</Button>
                        <Button>Send</Button>
                        <ButtonReplenishBalance/>
                    </CardActions>
                </Box>
            </CardContent>
        </Card>
    )
}

export default AccountBallance;