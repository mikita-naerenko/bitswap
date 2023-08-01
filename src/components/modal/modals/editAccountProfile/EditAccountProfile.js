
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Unstable_Grid2 as Grid
} from '@mui/material';
import SubmitButton from './components/SubmitButton';
import TextInputGroup from './components/TextInputGroup';
import AvatarInput from './components/AvatarInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../../../redux/AccountProfileSlice';
import { setModalEditProfileDisplayed } from '../../../../redux/ModalStateSlice';
import { Formik, Form } from 'formik';
import { validationSchemaEditPrifile } from '../schemes/validationScheme';

const EditAccountProfile = () => {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.accountProfile);
  const { modalEditProfileDisplayed } = useSelector((state) => state.modalState);

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
      validationSchema={validationSchemaEditPrifile}
      onSubmit={(values, { resetForm }) => {
        
        // Handle form submission logic here
        const newData = { ...values}
        console.log(`Data has been submitted`, newData);
        dispatch(updateUserProfile(newData));
        resetForm();
        dispatch(setModalEditProfileDisplayed(!modalEditProfileDisplayed))
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
                <TextInputGroup/>

                <Grid xs={12} md={12}>
                  <AvatarInput/>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <Divider />
          <SubmitButton/>
        </Card>
      </Form>
    </Formik>
  );
};

export default EditAccountProfile;
