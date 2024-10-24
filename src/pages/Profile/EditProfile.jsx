import React from 'react'
import FormBox from '../../components/atoms/FormBox'
import  Box  from '@mui/material/Box'
import EditAccountSettings from '../../components/templates/EditAcccountSettings'
import ChooseImage from '../../components/atoms/ChooseImage'
import EditBillingAddress from '../../components/templates/EditBillingAddress'
import EditPassword from '../../components/templates/EditPassword'
import  Grid  from '@mui/material/Grid'

export default function EditProfile() {
  return (
    <Box sx={{
      margin:2
    }}>
      <Grid container spacing={5}> 
        <Grid item xs={12}>
        <FormBox title="Account Settings">
    <Box sx={{
      display:'flex',
      flex:1,
      flexDirection:{md:'row',xs:"column-reverse"}
    }}>
    <EditAccountSettings/>
    <ChooseImage/>
    </Box>
   
 </FormBox>
        </Grid>
        <Grid item md={12}>
        <FormBox title="Billing Address">
    <EditBillingAddress/>
 </FormBox>
</Grid>
<Grid item md={12}>
<FormBox title="Change Password">
    <EditPassword/>
 </FormBox>
</Grid>
      </Grid>
    </Box>
     )
}
