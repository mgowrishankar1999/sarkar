import React, {useEffect} from 'react'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { Outlet } from 'react-router-dom'
import { Box, Grid } from '@mui/material'

import '../stylesheets/Root.css' 


import { getToken } from 'firebase/messaging'
import { getMessaging, onMessage } from "firebase/messaging";
import { messaging } from '../firebase/firebaseConfig'



export default function Root() {




  return (
    <Box sx={{flexGrow:1}}>
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={12}>
                <Outlet/>
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    </Box>
  )
}
