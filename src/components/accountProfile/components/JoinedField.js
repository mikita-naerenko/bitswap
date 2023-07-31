import {
    Typography
  } from '@mui/material';



const JoinedField = ({currentUser}) => {


    return (
        <Typography
        color="text.secondary"
        variant="body2"
      >
        Joined: {currentUser.joined}
      </Typography>
    )
}

export default JoinedField;