import {
    Box,
    Card,
    CardContent,
  } from '@mui/material';

  import ButtonEditProfile from './components/ButtonEditProfile';
  import JoinedField from './components/JoinedField';
  import NameField from './components/NameField';
  import LocationField from './components/LocationField';
  import DescriptionField from './components/DescriptionField';
  import AvatarProfile from './components/AvatarProfile';
  
   const AccountProfile = ({currentUser}) => {

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
                  <AvatarProfile currentUser={currentUser}/>
                  <JoinedField currentUser={currentUser}/>
                  <NameField currentUser={currentUser}/>
                  <LocationField currentUser={currentUser}/>
                  <DescriptionField currentUser={currentUser}/>
                </Box>
              </CardContent>
        </Card>
    )

   };

  export default AccountProfile;