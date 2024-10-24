import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TopNavText from '../atoms/TopNav';
import SarkarLogo from '../atoms/SarkarLogo';
import SearchBar from '../atoms/SearchBar';
import SignIn from '../atoms/SignIn';
import HeartIcon from '../atoms/IconswithBadges/HeartIcon';
import ShopIcon from '../atoms/IconswithBadges/ShopIcon';
import { makeStyles } from '@mui/styles';
import theme from '../../stylesheets/material-ui/customTheme';

const useStyles = makeStyles(()=>({
}))

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container>
      <Grid item xs={3} sx={{
      }}>
        <SarkarLogo/>
      </Grid>
      <Grid item xs={6} sx={{
        
        alignSelf:"flex-end",
        width:"100%",
        alignItems:"flex-end"
      }}>
        <SearchBar/>
      </Grid>
      <Grid item xs={1} sx={{
       
        display:"flex",
        justifyContent:"center",
        justifySelf:"center",
        alignSelf:"center"
      }}>
        <SignIn/>
      </Grid>
      <Grid item xs={1} sx={{
        alignSelf:"center",
        display:"flex"
      }}>
        <Box sx={{marginLeft:2, marginRight:2}}>
        <HeartIcon/>
        </Box>
        <Box sx={{marginLeft:2, marginRight:2}}>
        <ShopIcon/>
        </Box>
      </Grid>
    </Grid>
  </Box>
  )
}
