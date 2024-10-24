import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { AccountDrawer } from '../../Data/MyaccountData';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import Profile from '../../assets/myaccount/Ellipse5.png'
import { ThemeProvider } from '@emotion/react';
import { FontTheme } from '../../stylesheets/material-ui/customFontTheme';
import Text from './Text';
import CustomButton from './Button';

//this component is used at the profile page edit proifle section


export default function  ProfileCompnent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:'center',
                    border:'1px solid #E6E6E6'
                }}>
                <Box>
                <Avatar alt="Remy Sharp" src={Profile} sx={{ width: 156, height: 156 }}/>
                </Box>
                <Box>
                    <Text fontSize={20} fontWeight={600} value='Dianne Russell' color='#1A1A1A' />
                </Box>
                <Box>
                <Text fontSize={14} fontWeight={400} value='Customer' color='#687693' />
                </Box>
                <Box>
                    <CustomButton backgroundColor={null} textColor='#00B207' width={null} text="Edit Profile"/>
                </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
