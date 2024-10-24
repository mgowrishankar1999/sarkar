import React from 'react'
import  Box  from '@mui/material/Box'
import  Grid  from '@mui/material/Grid'
import { Outlet } from 'react-router-dom'
import MyAccountDrawer from '../components/atoms/MyAccountDrawer'
import EditProfile from './Profile/EditProfile'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { Container } from '@mui/material'
import ProfileDashboard from './Profile/ProfileDashboard'
import ViewOrderDetails from './Profile/ViewOrderDetails'

export default function Profileroot() {
  return (
    <>
   
    
    <Box sx={{padding:0}}>
        <Container maxWidth='lg'>
        <Grid container spacing={5}>
        <Grid item md={3} xs={12}>

            <MyAccountDrawer/>
        </Grid>
        <Grid item md={9} xs={12}>
            <Outlet/>
        </Grid>
        </Grid>
        </Container>
    </Box>
   
</>
  )
}
