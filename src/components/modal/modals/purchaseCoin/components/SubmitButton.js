import {
    Button,
    CardActions,
  } from '@mui/material';






const SubmitButton = () => {
    return (
        <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" type="submit">
          BUY
        </Button>
      </CardActions>
    )
}

export default SubmitButton;