import React from 'react'
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
 import { NavLink } from 'react-router-dom';

const theme = createTheme({
  typography: {
    "fontFamily": `"Poppins", sans-serif`,
    "fontSize": 13,
    "fontWeight": 500,
    body1:{
      color:"#687693"
    }
    
   }
})

function TopNavText({text, path}) {
  console.log(path)
  return (
    <ThemeProvider theme={theme}>
     <NavLink to={path} style={{textDecoration:'none'}}> 
    <Typography variant="body1" gutterBottom>
        {text}
  </Typography>
   </NavLink> 
  </ThemeProvider>
  )
}

export default TopNavText