import React from 'react'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import grandpa from '../assets/Faq/Faq-grandpa.svg'
import FaqAccordianTitle from '../components/organisms/FaqAccordianTitle';
import Container from '@mui/material/Container';
import theme from '../stylesheets/material-ui/customTheme';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(()=>({
  ImageConatainer:{
    alignSelf:"flex-end",
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  }

})
)

export default function Faq() {
  const classes = useStyles()
  return (
    <>    
   
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={11} lg={6} sx={{
        alignSelf:"center",
        height:"100%",
       
      }}>
        <Container maxWidth='sm'>
        <Box sx={{
           
        }}>
              <FaqAccordianTitle/>

        </Box>
        </Container>
      </Grid>
      <Grid item lg={6} className={classes.ImageConatainer}>
      <img src={grandpa} alt='left image' width={'80%'} height={'80%'}/>
      </Grid>
    </Grid>
    </Box>
    </>

  )
}
