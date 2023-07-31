import {
    Typography
  } from '@mui/material';



const LocationField = ({currentUser}) => {
    return (
        <Typography
        color="text.secondary"
        variant="body2"
      >
        {currentUser.city} {currentUser.country}
      </Typography>
    )
}

export default LocationField;