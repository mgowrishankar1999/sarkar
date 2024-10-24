import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InputMask from 'react-input-mask';


const styles = {
    root: {
      '& .MuiInput-underline:before': {
        borderBottomColor: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'white',
      },
    },
  };



export default function SignupCard() {
    return (
     
      <Box sx={{ flexGrow: 1, height:"100%", flex:1,justifyContent:"center", width:"100%",alignItems:"center"}}>
        <Grid container spacing={2} xs={12} sx={{justifyContent:"center",display:"flex"}}>
        <Box sx={{display:"flex", gap:2, flexDirection:"column"}}>
            <Box>
            <Typography variant="h3">Sign in to Sarkar</Typography>
            </Box>
            <Box>
            <Typography variant="body2">to access your Addresses, Orders & Wishlist</Typography>
            </Box>
            <Box sx={{ width:"100%", display:"flex", alignItems:"center", gap:2, borderBottom:"1px solid red"}}>
            <Box>+91</Box> <Box>-</Box> <Box>
            
            </Box>
            </Box>
            <Box>
                <Box sx={{backgroundColor:"blue", padding:3}}>
                    <Typography sx={{textAlign:"center", borderRadius:50}}>Get OTP</Typography>
                </Box>
            </Box>
          </Box>  
        </Grid>
      </Box>
    );
  }