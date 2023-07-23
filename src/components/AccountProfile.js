import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';


  import { Input } from '@mui/material';

  import { useDispatch } from 'react-redux';
  import { updateUserAvatar } from '../redux/AccountProfileSlice';
  import { useRef } from 'react';
  import ButtonEditProfile from './buttons/ButtonEditProfile';
  
  
   const AccountProfile = ({currentUser}) => {

    const fileInputRef = useRef(null);

    const dispatch = useDispatch();

    const handleFileInputChange = (event) => {
      // Update user avatar 
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        dispatch(updateUserAvatar(reader.result))
      };
    };
  
    const handleButtonClick = () => {
      fileInputRef.current.click();
    };



    return (
          <Card>
          <CardContent style={{position: 'relative'}}>
            <ButtonEditProfile/>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Avatar
                src={currentUser.avatar}
                sx={{
                  height: 80,
                  mb: 2,
                  width: 80
                }}
              />
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Joined: {currentUser.joined}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
              >
                {`${currentUser.firstName} ${currentUser.lastName}`}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {currentUser.city} {currentUser.country}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Description: {currentUser.description}
              </Typography>
            </Box>
          </CardContent>
          <Divider />
          <CardActions>
      <Input
        id="file-input"
        type="file"
        inputRef={fileInputRef}
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
      />
      <Button color="primary" fullWidth variant="text" onClick={handleButtonClick}>
        Update Avatar
      </Button>
          </CardActions>
        </Card>
    )

   };

  export default AccountProfile;