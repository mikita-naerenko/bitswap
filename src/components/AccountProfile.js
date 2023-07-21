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
  import ModeEditIcon from '@mui/icons-material/ModeEdit';
  import IconButton from '@mui/material/IconButton';

  import { Input } from '@mui/material';

  import { useDispatch, useSelector } from 'react-redux';
  import { updateUserAvatar, setEditModalDisplayed } from '../redux/AccountProfileSlice';
  import { useRef } from 'react';

  
  
   const AccountProfile = ({currentUser}) => {

    const fileInputRef = useRef(null);

    const dispatch = useDispatch();
    const { editModalDisplayed } = useSelector(state => state.accountProfile)

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
    const handleEditProfileButtonClick = () => {
      dispatch(setEditModalDisplayed(!editModalDisplayed))
    }


    return (
          <Card>
          <CardContent style={{position: 'relative'}}>
            <IconButton style={{position: 'absolute', top: '0', right: '0'}}
                        variant='contained'
                        onClick={handleEditProfileButtonClick}
            >
              <ModeEditIcon/>
            </IconButton>
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