import React from 'react'
import  Box  from '@mui/material/Box'
import  Grid  from '@mui/material/Grid'
import { red } from '@mui/material/colors'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'

export default function ChooseImage() {
  return (
    <Grid container  spacing={2} sx={{flexGrow:0,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Grid item sx={12}>
            <Box sx={{
                width:200,
                height:200,
                backgroundColor:'black',
                borderRadius:100,
                backgroundImage:"url('https://via.placeholder.com/200')"
            }}>
                
            </Box>
        </Grid>
        <Grid item sx={12}>
        <Button variant="contained"  sx={{borderRadius:10,backgroundColor:"#00B207",
      width:"100%",
      padding:1.5,
      ":hover":{backgroundColor:"#00B207"},textTransform:"capitalize",fontFamily:"sans-serif"}} 
      >
          Save changes
        </Button>
        </Grid>
    </Grid>
  )
}
