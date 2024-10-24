import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TopNavText from '../atoms/TopNav';
import TrendingProds from '../atoms/TrendingProds';
import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../stylesheets/material-ui/customTheme';

const useStyles = makeStyles({
  motherContainer:{
    flexGrow: 1,
    // [theme.breakpoints.down("sm")]:{
    //   display:"none"
    // }
  }
})

function TopNav() {
  const classes = useStyles()
  return (
    <Box className={classes.motherContainer}>
      <Grid container spacing={2}>
        <Grid item md={1} xs={12}>
          <TopNavText text={'About Us'} path="/aboutus"/>
        </Grid>
        <Grid item md={1} xs={12}>
          <TopNavText text={'My Accounts'} path="/profile"/>
        </Grid>
        <Grid item md={1} xs={12}>
          <TopNavText text={'Wishlist'} />
        </Grid>
        <Grid item md={8} xs={12}>
          <TopNavText text={'We deliver to you every day from 7:00 to 23:00'}/>
        </Grid>
        <Grid item md={1} xs={12}>
          <TopNavText text={'Order Tracking'}/>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default TopNav