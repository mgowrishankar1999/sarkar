import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { FontTheme } from '../../stylesheets/material-ui/customFontTheme';
import { ThemeProvider } from '@emotion/react';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));
export default function FormBox(props) {
  return (
    <ThemeProvider theme={FontTheme}>
    <Box sx={{ flexGrow: 1}}>
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{
        border:'1px solid #E6E6E6',
        borderBottom:'none',
      }}>
         <Container  maxWidth="xl">
        <Item elevation={0}>
            <Typography sx={{
                fontSize:20,
                fontWeight:600
            }} color='black'>{props.title}</Typography>
        </Item>
        </Container>
      </Grid>
      <Grid item xs={12} sx={{
        border:'1px solid #E6E6E6',
        display:"flex",
        flex:1
      }}>
        <Container maxWidth="xl">
         {props.children}
        </Container>
      </Grid>
    </Grid>
  </Box>
  </ThemeProvider>
  )
}
