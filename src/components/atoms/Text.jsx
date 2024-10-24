import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { FontTheme } from '../../stylesheets/material-ui/customFontTheme'
import { Typography } from '@mui/material'



export default function Text(props) {
    console.log(FontTheme)
  return (
            <ThemeProvider theme={FontTheme}>
            <Typography sx={{
                    fontSize:props.fontSize,
                    fontWeight:props.fontWeight,
                   
            }} color={props.color}>{props.value}</Typography>
            </ThemeProvider>
  )
}
