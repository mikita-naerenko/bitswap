import {
    Button,
    CardActions,
  } from '@mui/material';






const SubmitButton = () => {
    return (
        <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" type="submit">
          REPLENISH THE BALANCE
        </Button>
      </CardActions>
    )
}

export default SubmitButton;