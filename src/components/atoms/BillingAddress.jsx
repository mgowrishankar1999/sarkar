import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { FontTheme } from '../../stylesheets/material-ui/customFontTheme'
import Text from './Text';
import  Box  from '@mui/material/Box';
import CustomButton from './Button';
import  Grid  from '@mui/material/Grid';

export default function BillingAddress() {
  return (
    <Box sx={{ flexGrow: 1,  display:'flex'}}>
        <Grid container sx={{display:"flex",flexGrow:1}}>
            <Grid item xs={12} >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:'flex-start',
                    border:'1px solid #E6E6E6',
                   gap:1.6,
                   paddingLeft:2
                   
                }}>
                <Box>
                  <Text fontSize={20} fontWeight={600} value='Billing address' color={null} />`
                </Box>
                <Box>
                    <Text fontSize={20} fontWeight={600} value='Dianne Russell' color='#1A1A1A' />
                </Box>
                <Box>
                <Text fontSize={14} fontWeight={400} value='4140 Parker Rd. Allentown, New Mexico 31134' color='#687693' />
                </Box>
                <Box>
                <Text fontSize={14} fontWeight={400} value='dainne.ressell@gmail.com' color='#1a1a1a' />

                </Box>
                <Box>
                <Text fontSize={14} fontWeight={400} value='(671) 555-0110' color='#1a1a1a' />

                </Box>
                <Box>
                    <CustomButton backgroundColor={null} textColor='#00B207' width={null} text="Edit Address"/>
                </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
