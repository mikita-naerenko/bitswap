import {
    Button,
    CardActions,
  } from '@mui/material';






const SubmitButton = () => {
    return (
        <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" type="submit">
        Save details
        </Button>
      </CardActions>
    )
}

export default SubmitButton;