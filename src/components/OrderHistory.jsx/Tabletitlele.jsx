import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { FontTheme } from '../../stylesheets/material-ui/customFontTheme'
import { Typography } from '@mui/material'
import Text from '../atoms/Text'
import Grid from '@mui/material/Grid'
export default function Tabletitlele(props) {
  return (
    <ThemeProvider theme={FontTheme}>
        <Grid container sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            border:'1px solid #E6E6E6',
            padding:'10px'
        }}>
            <Grid item xs={6}>
                <Text fontSize={props.textsize} fontWeight={600} value={props.text} color='#1A1A1A' />
            </Grid>
            <Grid item xs={6} sx={{
                display:"flex",
                justifyContent:"flex-end",
                paddingRight:'5%'
            }}>
            <Text fontSize={props.text2size} fontWeight={500} value={props.text2} color='#00B207' />    
            </Grid>
        </Grid>
    </ThemeProvider>
  )
}
