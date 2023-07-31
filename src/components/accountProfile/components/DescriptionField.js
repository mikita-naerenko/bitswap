import {
    Typography
  } from '@mui/material';



const DescriptionField = ({currentUser}) => {
    return (
        <Typography
        color="text.secondary"
        variant="body2"
      >
        Description: {currentUser.description}
      </Typography>
    )
}

export default DescriptionField;