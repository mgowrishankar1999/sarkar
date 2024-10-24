import React from 'react'
import  Grid  from '@mui/material/Grid'
import  Box  from '@mui/material/Box'
import  Feature from '../../assets/aboutus/gridLogos/Leaf.svg'
import  Typography  from '@mui/material/Typography'
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


export default function AboutuslogoGrid(props) {
    console.log(props)
  return (
    <ThemeProvider theme={theme}>
    <Box>
        <Grid container>
            <Grid item sx={{
                display:"flex",
                alignItems:"center",
                gap:3
            }}>
                <Box>
                    <img src={props.img} alt="iconImage"/>
                </Box>
                <Box>
                    {props.title && <Typography variant='h3' sx={{
                      fontSize:{md:20, xs:15}
                    }}>
                    {props.title}
                    </Typography >}
                    <Typography variant='body1' sx={{fontSize:{xs:15}}}>
                    {props.description}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>
    </ThemeProvider>
  )
}
