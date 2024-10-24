import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { AccountDrawer } from '../../Data/MyaccountData';
import { Typography,IconButton } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontTheme } from '../../stylesheets/material-ui/customFontTheme';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function MyAccountDrawer() {
  const [selectedItem ,setSelectedItem] = useState(AccountDrawer[0])
  const [menu,setMenu]=useState(false)
  //navigation to other pages
  const navigation = useNavigate()
  const handleClick = (e)=>{
    console.log(e)
    setSelectedItem(e)
    
  }

  const handleMenu=()=>{
    setMenu(prevState=>!prevState)
  }
  return (
    <ThemeProvider theme={FontTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item sx={{
          padding:3,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          border:"1px solid #E6E6E6",
          borderBottom:"0px solid"
        }} xs={12}>
          
          <Typography sx={{
            fontWeight:600,
            fontSize:20,
            color:"#1A1A1A"
          }}>Navigation</Typography>
          <IconButton sx={{display:{md:"none"}}}onClick={handleMenu}>
            {menu ? <ArrowUpward/>:<ArrowDownward/>}
          </IconButton>
        </Grid>
        <Grid item xs={12} sx={{
        border:"1px solid #E6E6E6",
        padding:0,
        margin:0,
      }}>
          {AccountDrawer.map((e,index)=><Grid key={index} onClick={()=>handleClick(e)} sx={{
            display:{md:'flex',xs:menu?"block":"none"},
            backgroundColor:e.id === selectedItem.id ? "#E6E6E6":"",
            borderLeft:e.id === selectedItem.id ?'4px solid #00B207':"",
            flexDirection:"row",
            gap:3,
            padding:3
          }}>
              <NavLink style={{display:"flex", textDecoration:"none"}} to={e.link}>
              <Box>
                <img src={e.Icon} alt="Icon"/>
              </Box>
              <Box style={{marginLeft:5}}>
                <Typography>{e.name}</Typography>
              </Box>
              </NavLink>

            </Grid>
)} 
        </Grid>
       </Grid>
    </Box>
    </ThemeProvider>
  )
}
