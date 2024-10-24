import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FaqAccordion from '../molecules/FaqAccordian';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';


const theme = createTheme({
    typography: {
      "fontFamily": `"Poppins", sans-serif`,
      "fontSize": 28,
      "fontWeight":900,
      body1:{
        color:"black"
      }
      
     }
  })

export default function FaqAccordianTitle() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1,justifyContent:"center",display:"flex" }}>
    <Grid container spacing={1}>
      <Grid item xs={12}md={8}>
      <Typography gutterBottom sx={{
        fontWeight:700
      }}>
      Welcome, Let’s Talk About Our Ecobazar
      </Typography>
      </Grid>
      <Grid item xs={12}>
      <FaqAccordion/>
      </Grid>
    </Grid>
  </Box>
  </ThemeProvider>
  )
}
