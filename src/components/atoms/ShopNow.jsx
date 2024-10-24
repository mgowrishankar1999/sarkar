import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { IoIosArrowRoundForward } from "react-icons/io";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';


const theme = createTheme({      
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  });
  


function ShopNow({backgroundColor,textColor,width}) {

  return (
<ThemeProvider theme={theme}>
  <Box sx={{
    backgroundColor:backgroundColor,
    borderRadius:'20px',
    width:width,
    display:"flex",
    justifyContent:"center"
  }}> 
    <Button endIcon={<IoIosArrowRoundForward/>} sx={{
        color:textColor,
    }}>Shop now</Button>
  </Box>
  </ThemeProvider>
  )
}

export default ShopNow