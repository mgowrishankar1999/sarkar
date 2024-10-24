import React from 'react'
import  Box  from '@mui/material/Box'
import  Grid  from '@mui/material/Grid'
import { Typography } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import { FontTheme } from '../../stylesheets/material-ui/customFontTheme'

export default function OrderHistoryTable(props) {
  return (
    <ThemeProvider theme={FontTheme}>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container sx={{
        display:'flex',
        flex:1,
        flexDirection:'column',
    }}>
        <Grid item xs={12} sx={{
              border:'1px solid #E6E6E6',
              borderBottom:'none',
              display:"flex"
        }}>
                <Typography sx={{
                    fontWeight:400,
                    fontSize:20,
                    color:'#999999',
                    paddingLeft:3
                }}>{props.title}</Typography>
        </Grid>
        <Grid item xs={12} sx={{
              border:'1px solid #E6E6E6',
        }}>
            <Grid container spacing={2} sx={{
                flex:1,
                display:"flex",
                padding:3
            }}>
                <Grid item xs={12}>
                <Grid item xs={12}>
                    <Typography>{props.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>{props.address}</Typography>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <Typography sx={{
                    fontWeight:400,
                    fontSize:15,
                    color:'#999999'
                }}>Email</Typography>
                    <Typography>{props.email}</Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography sx={{
                    fontWeight:400,
                    fontSize:15,
                    color:'#999999'
                }}>Phone</Typography>
                    <Typography>{props.phone}</Typography>
                </Grid>
            </Grid>
            
        </Grid>
    </Grid>
    </Box>
    </ThemeProvider>
  )
}
