import { useState } from 'react'
import TopAd from '../atoms/TopAd'
import ShopNow from '../atoms/ShopNow'
import "../../App.css"
import TopNav from '../molecules/TopNav'
import ShopIcon from '../atoms/IconswithBadges/ShopIcon'
import HeartIcon from '../atoms/IconswithBadges/HeartIcon'
import SarkarLogo from '../atoms/SarkarLogo'
import AppBar from '../molecules/AppBar'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {Box,IconButton,List,ListItem,Divider} from '@mui/material';
import PageSection from '../molecules/PageSection'
import Grid from '@mui/material/Grid';
import { Close, Menu } from '@mui/icons-material'
import SearchBar from '../atoms/SearchBar'
import SignIn from '../atoms/SignIn'
import { NavLink, useNavigate } from 'react-router-dom'


function Header() {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()

  const handlenav=()=>{
    console.log("imin")
    navigate("/AddTocart")
  }


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250,px:1 }} role="presentation" >
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",mb:2}}>
      <SarkarLogo/>
      <IconButton onClick={toggleDrawer(false)} sx={{right:0}}>
        <Close/>
      </IconButton>
      </Box>
      <List>
          <ListItem disablePadding>
            <TopNav/>
          </ListItem>
          <ListItem disablePadding>
            <PageSection/>
            </ListItem>
           
      </List>
    </Box>
  );

  return (
    <>
         
    <Grid container sx={{
      display:{md:"flex"},
      justifyContent:"center",
     
    }}>
      <Grid item xs={12} sx={{
        backgroundColor:'#8900BA',
        display:"flex",
        justifyContent:"center"

      }}>
        <Grid xs={12} sx={{
          display:{md:"none",xs:"block"}
          }}  >
            <Grid container sx={{display:"flex",height:80,alignItems:"center"}}>
              <Grid item xs={2}>
            <Button onClick={toggleDrawer(true)} sx={{color:"#fff"}}><Menu/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer> 
      </Grid>   
      <Grid item xs={5} sx={{px:1}}>
      <SearchBar/> 
      </Grid> 
      <Grid item xs={5} sx={{display:"flex",alignItems:"center"}}>
      <SignIn/>
        <HeartIcon/>
        <IconButton onClick={handlenav}>
        <ShopIcon/>
        </IconButton>
           </Grid>
            </Grid>
        </Grid>
          <Grid md={12} sx={{
          display:{xs:"none",md:"block"}
          }}>
            <TopAd/>
          </Grid>
      </Grid>
      <Grid item xs={11.5} sx={{
          display:{xs:"none",md:"block"}
          }}>
      <TopNav/>
      </Grid>
      <Grid item xs={11.5} sx={{
          display:{xs:"none",md:"block"}
          }}>
      <AppBar/>
      </Grid>
      <Grid item xs={11.5} sx={{
          display:{xs:"none",md:"block"}
          }}>
      <PageSection/>
      </Grid>
    </Grid>
    </>
  )
}

export default Header


