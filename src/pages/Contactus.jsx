import React from 'react'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import  Box  from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import  Card  from '@mui/material/Card'
import Finally from '../components/molecules/Contactuslist'
import ContactusForm from '../components/templates/ContactusForm'
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles'
import theme from '../stylesheets/material-ui/customTheme'


const useStyles = makeStyles(() => ({
  
  myForm:{
      [theme.breakpoints.down("sm")]:{
        display:"none"
      }
    },
  newFrom:{
    display:"none",
    [theme.breakpoints.down("sm")]:{
      display:"block"
    }
  }
  
  
}))

export default function Contactus() {
  const classes = useStyles()
  return (
    <>
    <Box sx={{
        flexGrow:1
    }}>
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              gap:'2%'
            }}>
              <Grid sx={{
                display:"flex",
                justifyContent:"center",
                gap:'2%',
                padding:"3%"
              }}>
              <Grid xs={12} md={2}>
                <Card>
                  <Finally/>
                </Card>
              </Grid>
              <Grid xs={12} md={8} className={classes.myForm}>
                <Card sx={{
                  flex:1,
                  height:'100%',
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}>
                <Container maxWidth="fixed">
                <ContactusForm/>

                </Container>
                </Card>
              </Grid>
              </Grid>
            
            </Grid>
            <Grid item xs={12} sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              gap:'2%'
            }}>
              <Grid sx={{
                display:"flex",
                justifyContent:"center",
                gap:'2%',
                padding:"3%"
              }}>
              <Grid xs={12} md={8} className={classes.newFrom} >
                <Card sx={{
                  flex:1,
                  height:'100%',
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}>
                <Container maxWidth="fixed">
                <ContactusForm/>

                </Container>
                </Card>
              </Grid>
              </Grid>
            
            </Grid>
            <Grid>

            </Grid>

            <Grid item  xs={12}>
            <Box sx={{
              width:"100%",
            }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.632531902156!2d80.23868584619329!3d13.006731237939551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ed15c41681%3A0x6569ce967a249e83!2sAdyar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710117626244!5m2!1sen!2sin" width="100%" height="370"loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
            
            </Grid>
        </Grid>
    </Box>
    </>
  )
}
