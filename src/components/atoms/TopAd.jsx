import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import  Typography from '@mui/material/Typography';
import { IoLocationOutline } from "react-icons/io5";
import { makeStyles } from '@mui/styles';
import theme from '../../stylesheets/material-ui/customTheme';
import { ThemeProvider } from '@emotion/react'

const useStyles = makeStyles(() => ({
  motherContainer : {
    flexGrow: 1,
    backgroundColor:'#8900BA',
    margin:0,
    display:"flex",
    justifyContent:"space-between",
  },
  topAd1: {
    display:'flex',
    alignContent:"center"
  },
  grid1: {
    display: "block",
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  },
  topAd2Text: {
    color:'white',
    fontFamily: 'Poppins',
    [theme.breakpoints.down("sm")]:{
      fontSize:"small",
      justifyContent:"center"
    } 
  }
}))

//this componenet is responsible for the top ad
function TopAd() {
  const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1,
        backgroundColor:'#8900BA',
        
        margin:0,
        display:"flex",
        justifyContent:"space-between"
     }}>
      <Grid container>
        <Grid item md={8} lg={8} className={classes.grid1}>
        
            <Box sx={{
                display:'flex',
        
                alignContent:"center",
                marginLeft:3
            }}>
                <Box>
                <IoLocationOutline color='white' size={20}  sx={{
                        color:'white'
                    }}/>
                </Box>
                <Box>
                    <Typography variant='body2' sx={{
                        color:'white'
                    }}>
                    Store Location: Lincoln- 344, Illinois, Chicago, USA
                    </Typography>
                    </Box>
            </Box>
         
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} sx={{
            display:'flex',
            alignItems:"center",
      
          }}>
          <Box>
            <Typography variant='body2' className={classes.topAd2Text}>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
   
  )
}

export default TopAd