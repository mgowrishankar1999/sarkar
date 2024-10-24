import React from 'react'
import Paper from '@mui/material/Paper';
import  Grid  from '@mui/material/Grid';
import Comma from  '../../assets/aboutus/Testimonial/Comma.svg'
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import  Typography  from '@mui/material/Typography';
import  Box  from '@mui/material/Box';


export default function TestimonialCarousel() {
  return (
    <Box sx={{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignContent:"center"
    }}>
    <Paper sx={{
        padding:'5%'
    }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <img src={Comma} alt=""/>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate placeat, iure exercitationem praesentium repellat sunt nulla totam necessitatibus consequuntur ut officiis?
                </Typography>
            </Grid>
            <Grid item xs={6} sx={{
                display:"flex",
                alignItems:"center",
                gap:2
            }}>
             
                    <Grid item>
                        <Avatar alt="name" src=''/>
                    </Grid>
                    <Grid item>
                        <Typography sx={{
                            margin:0
                        }}>
                            Rober Fox
                        </Typography>
                        <Typography sx={{
                            margin:0
                        }}>
                            Customer
                        </Typography>
                    </Grid>
                
            </Grid>
            <Grid item xs={6} sx={{
                display:"flex",
                justifyContent:"flex-end"
            }}>
            <Rating name="read-only" value={3} readOnly />
            </Grid>
        </Grid>
    </Paper>
    </Box>
  )
}
