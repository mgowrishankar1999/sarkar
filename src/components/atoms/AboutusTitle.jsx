import React from 'react'
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

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
export default function AboutusTitle(props) {
    console.log(props)
  return (
    <ThemeProvider theme={theme}>
    <Typography variant="h3" gutterBottom sx={{
      fontSize:36,
      fontWeight:600
    }}>
          {props.title}
    </Typography>
    <Typography variant="body1" gutterBottom sx={{
      fontSize:13
    }}>
       {props.description}
    </Typography>
    </ThemeProvider>
  )
}
