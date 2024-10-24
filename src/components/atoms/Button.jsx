import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { IoIosArrowRoundForward } from "react-icons/io";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { FontTheme } from '../../stylesheets/material-ui/customFontTheme';


const theme = createTheme({      
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  });
  


function CustomButton({backgroundColor,textColor,width,text}) {

  return (
<ThemeProvider theme={theme}>
  <Box sx={{
    backgroundColor:backgroundColor,
    borderRadius:'20px',
    width:width,
    display:"flex",
    justifyContent:"center"
  }}> 
    <Button sx={{
        color:textColor,
    }}>{text}</Button>
  </Box>
  </ThemeProvider>
  )
}

export default CustomButton