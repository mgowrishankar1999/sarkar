import React from 'react'
import notfound from '../../../src/assets/notfound.svg'
import { Box, Typography ,Button} from '@mui/material'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';


// const theme = createTheme({
//     typography: {
//       "fontFamily": `"Poppins", sans-serif`,
//       "fontSize": 40,
//       "fontWeight": 600,
//       body1:{
//         color:"black"
//       }
      
//      }
//   })
  

const theme = createTheme();

theme.typography.h3 = {
  fontSize: 50,
  fontFamily: `"Poppins", sans-serif`,
  [theme.breakpoints.down('md')]: {
    fontSize: 30,
    body1:{
        color:"#808080"
    }
  },
};

theme.typography.body1 = {
    fontSize: 16,
    fontFamily: `"Poppins", sans-serif`,
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
      body1:{
          color:"#808080"
      }
    },
  };



export default function NotFound() {
  return (
    <> 
    {/* <Header/> */}
    <ThemeProvider theme={theme}>
   
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:5
    }}> 
        <Box>
            <img src={notfound} alt='error' width="100%" height="100%"/>
        </Box> 
        <Box>
            <Typography variant='h3'>Oops! not found</Typography>
        </Box>  
        <Box>
            <Typography  variant='body1'>
                Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis
            </Typography>
        </Box>
        <Box sx={{
            justifyContent:"center",
            marginTop:2
        }}>
            <Box>
            <Button variant="contained"  sx={{borderRadius:20,backgroundColor:"#8900BA",":hover":{backgroundColor:"#8900BA"},textTransform:"capitalize"}}>
            <Typography sx={{
                 "fontSize": 14,
                 "fontWeight": 600,
                 "color":'#fff'
            }}>
                Back to Home
            </Typography>
        </Button>
            </Box>
      
        </Box>      
    </Box>
    
    </ThemeProvider>
    {/* <Footer/> */}
    </>

  )
}
