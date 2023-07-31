import {
    Avatar,
  } from '@mui/material';



const AvatarProfile = ({currentUser}) => {

    return (
        <Avatar
        src={currentUser.avatar}
        sx={{
          height: 80,
          mb: 2,
          width: 80
        }}
      />
    )

}

export default AvatarProfile;