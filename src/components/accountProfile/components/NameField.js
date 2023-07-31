import {
    Typography
  } from '@mui/material';



const NameField = ({currentUser}) => {
    return (
        <Typography
        gutterBottom
        variant="h5"
      >
        {`${currentUser.firstName} ${currentUser.lastName}`}
      </Typography>
    )
}

export default NameField;