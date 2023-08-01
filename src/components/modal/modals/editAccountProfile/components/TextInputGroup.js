import TextInput from "./TextInput";
import {
    Unstable_Grid2 as Grid
  } from '@mui/material';








const TextInputGroup = () => {



    return (
        <>
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
        </>
    )
}


export default TextInputGroup;