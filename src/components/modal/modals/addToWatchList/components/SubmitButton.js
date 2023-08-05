import {
    Button,
    CardActions,
  } from '@mui/material';






const SubmitButton = ({autoBuyingToggle, calculatedPrice, user}) => {
    return (
        <CardActions sx={{ justifyContent: 'center' }}>
        <Button 
                variant="contained" 
                type="submit" 
                disabled={user.balance < calculatedPrice && autoBuyingToggle ? true : false}
                >
                 {autoBuyingToggle ? 'ADD TO WATCH AND AUTO PURCHASE LIST' : 'ADD TO WATCH LIST'}
        </Button>
      </CardActions>
    )
}

export default SubmitButton;