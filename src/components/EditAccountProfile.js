import { useCallback } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';

import { Input, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAvatar, updateUserProfile, setEditModalDisplayed } from '../redux//AccountProfileSlice';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { useRef, useState }  from 'react';

const validationSchema = Yup.object({
  firstName: Yup.string().min(2, 'First name must be at least 2 characters').required('Field is required'),
  lastName: Yup.string().min(2, 'Last name must be at least 2 characters').required('Field is required'),
  email: Yup.string().email('Invalid email'),
  phone: Yup.string().min(8, 'Phone must be at least 8 characters'),
  country: Yup.string().min(2, 'Must be at least 2 characters'),
  city: Yup.string().min(2, 'Must be at least 2 characters'),
});


const TextInput = ({...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
    <TextField {...field}{...props} />
     {meta.touched && meta.error ? (
    <Typography color="error">{meta.error}</Typography>
  ) : null}
    </>
  )
}

const EditAccountProfile = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { user: currentUser, editModalDisplayed } = useSelector((state) => state.accountProfile);

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
    <Formik
      initialValues={{
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        email: currentUser.email || '',
        phone: currentUser.phone || '',
        country: currentUser.country || '',
        city: currentUser.city || '',
        description: currentUser.description || '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        // Handle form submission logic here
        const newData = { ...values}
        console.log(`Data has been submitted`, newData);
        dispatch(updateUserProfile(newData));
        resetForm();
        dispatch(setEditModalDisplayed(!editModalDisplayed))
      }}
    >
      <Form autoComplete="off" noValidate>
        <Card>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <CardContent sx={{ pt: 0 }}>
            <Box sx={{ m: -1.5 }}>
              <Grid container spacing={3}>
                <Grid xs={12} md={6}>
                  <TextInput
                             fullWidth
                             label="First name"
                             name="firstName" 
                             required
                             />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextInput
                             fullWidth
                             label="Last name"
                             name="lastName" 
                             required
                             />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextInput
                             fullWidth
                             label="Email Address"
                             name="email" 
                             required
                             />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextInput
                             fullWidth
                             label="Phone number"
                             name="phone" 
                             type="number"
                             required
                             />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextInput
                             fullWidth
                             label="Country"
                             name="country" 
                             required
                             />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextInput
                             fullWidth
                             label="City"
                             name="city" 
                             required
                             />
                </Grid>
                <Grid xs={12} md={12}>
                  <TextInput
                             fullWidth
                             label="About yourself"
                             name="description" 
                             required
                             />
                </Grid>

                <Grid xs={12} md={12}>
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
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" type="submit">
              Save details
            </Button>
          </CardActions>
        </Card>
      </Form>
    </Formik>
  );
};

export default EditAccountProfile;
