import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { FontTheme } from '../../stylesheets/material-ui/customFontTheme';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ThemeProvider } from '@emotion/react';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));
export default function FormBoxorder(props) {
  return (
    <ThemeProvider theme={FontTheme}>
    <Box sx={{ flexGrow: 1,marginTop:2}}>
    <Grid container spacing={2}>
      <Grid item md={12} xs={12} sx={{
        border:'1px solid #E6E6E6',
        borderBottom:'none',
        display:{md:'flex'},
        flexDirection:'row',
        justifyContent:"space-around",
        gap:'40%'
      }}>
        <Box sx={{display:{md:'flex'}}}>
        <Item elevation={0}>
            <Typography sx={{
                fontSize:20,
                fontWeight:600,
                display:"flex",
                height:'100%',
            }} color='black'>{props.title}</Typography>
        </Item>
        <Item elevation={0}>
            <Typography sx={{
                display:'flex',
                alignSelf:"center",
                paddingTop:'2px'
            }} color='black'><FiberManualRecordIcon/>{props.date}</Typography>
        </Item>
        <Item elevation={0}>
            <Typography sx={{
                display:'flex',
                alignSelf:'cneter',
                paddingTop:'2px'
            }} color='black'><FiberManualRecordIcon/>{props.productCount} products</Typography>
        </Item>
        </Box>
        <Box>
        <Typography sx={{
                fontSize:20,
                fontWeight:600,
                paddingTop:'2px'
            }} color='#00B207'>Back to List</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{
        border:'1px solid #E6E6E6'
      }}>
        <Container maxWidth="xl">
            <Item elevation={0}>{props.children}</Item>
            </Container>
      </Grid>
    </Grid>
  </Box>
  </ThemeProvider>
  )
}
