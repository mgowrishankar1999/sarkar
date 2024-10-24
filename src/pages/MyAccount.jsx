import React from 'react'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import  Box  from '@mui/material/Box';
import  Grid  from '@mui/material/Grid';
import {Outlet} from 'react-router-dom'

const menuItems = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Order History' },
    { id: 3, name: 'Settings' },
    { id: 4, name: 'Wishlist' },
    { id: 5, name: 'Shopping Cart' }
  ];

export default function MyAccount() {
  return (
    <Box sx={{
        flex:1
    }}>
        <Grid container sx={{
            display:"flex",
            justifyContent:"center",
        }}>
           <Grid item xs={3}>
            
           </Grid>
           <Grid item xs={5}>

           </Grid>
        </Grid>
    </Box>
  )
}
