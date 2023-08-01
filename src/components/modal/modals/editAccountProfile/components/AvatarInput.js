import { Input, CardActions, Button } from '@mui/material';
import { updateUserAvatar } from '../../../../../redux/AccountProfileSlice';
import { useDispatch } from 'react-redux';
import { useRef }  from 'react';




const AvatarInput = () => {
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);

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
        <CardActions>
        <Input
          id="file-input"
          type="file"
          inputRef={fileInputRef}
          onChange={handleFileInputChange}
          style={{ display: 'none' }}
        />
        <Button
          color="primary"
          fullWidth
          variant="text"
          onClick={handleButtonClick}
        >
          Update Avatar
        </Button>
      </CardActions>
    )
}

export default AvatarInput;