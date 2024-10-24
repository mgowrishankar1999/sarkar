import React from 'react'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import AboutusTitle from '../components/atoms/AboutusTitle'
import Farmer from '../assets/aboutus/Images/Farmer.png'
import BackGround from '../assets/aboutus/Images/BG.png'
import { GridData } from '../Data/AboutsData'
import AboutuslogoGrid from '../components/atoms/AboutuslogoGrid'
import VegFarmer from '../assets/aboutus/Images/VegFarmer.png'
import Seller from '../assets/aboutus/Images/Seller.png'
import { LastGridData } from '../Data/AboutsData'
import ShopNow from '../components/atoms/ShopNow'
import TeamCarouselMolecule from '../components/molecules/TeamCarousel'
import { ResponsiveCarouselMolecule } from '../components/molecules/TeamCarousel'
import ClientTestimonalMolecule from '../components/molecules/ClientTestimonialMolecule'
import SponsorsCarousel, { ResponsiveSponsorsCarousel } from '../components/atoms/SponsorsCarousel'
import { ClientResponsiveTestimonalMolecule } from '../components/molecules/ClientTestimonialMolecule'
import { makeStyles } from '@mui/styles'
import { Container } from '@mui/material';
import theme from '../stylesheets/material-ui/customTheme'


const useStyles = makeStyles(()=>({
    conatainer1:{
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
      
        gap:'5%',
    }
})) 

export default function Aboutus() {
    const classes = useStyles()
  return (
    <Container maxWidth={{xs:"sm", md:"md", lg:"lg"}}>
    <Box>
        <Grid container>
            <Grid item xs={12} sx={{
                display:'flex',
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Grid className={classes.conatainer1} sx={{ flexDirection: { xs: "column", md: "row"} }} xs={12} sm={12} md={8}>
                    <Box sx={{
                      
                        width:'100%',
                        height:'100%'
                    }}>
                       <AboutusTitle title='100% Trusted Organic Food Store' description='Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
'/>
                    </Box>
                    <Box sx={
                        {
                         
                            height:"100%",
                            width:"100%"
                        }
                    }>
                        <img src={Farmer} alt='Farmer png' style={{
                             height: '100%',
                             width: '100%',
                            objectFit:'contain',
                            
                        }}/>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12}>
            <Grid sx={{
                    display:'flex',
                    alignItems:"center",
                    flexDirection: { xs: "column-reverse", md: "row"},
                    justifyContent:"center"
                    // backgroundColor:'pink'
                   
                }}>
                    {/*Image worked for higher resultion */}
                       <Box sx={{
                        width:'120%',
                        height:'120%',
                        display: {xs:'none', md:"block"}
                       }}>
                        <img src={BackGround} alt='Background'
                        style={{
                            width:'100%',
                            height:'100%',
                            position:'relative',
                            objectFit:'contain'
                        }}
                        />
                        <img src={VegFarmer} alt='FarmerPng' style={{
                            position:"absolute",
                          
                            height:"55%",
                            left:'15%'
            
                        }}>
                        </img>
                       </Box>
                    <Box sx={{
                        // backgroundColor:'green',
                        display:'flex',
                        padding:{xs:0, md:10},
                        flexDirection:'column',
                        justifyContent:"center",
                        alignItems:'center'
                    }}>
                    <Box>
                    <AboutusTitle title='100% Trusted Organic Food Store' description='Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
'/>
                    </Box>
                    
    
        <Grid container spacing={2}>
        {GridData.map((e)=>(
            <Grid item xs={6} md={6}>
                <AboutuslogoGrid img={e.Icon} title={e.title} description={e.description}/>
            </Grid>
        ))}
        </Grid>
    
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{
                display:'flex',
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Grid sx={{
                    display:'flex',
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:{xs:"column", md:"row"}
                  

                }} xs={12} md={8}>
                    <Box sx={{
                       // backgroundColor:'green',
                        width:'100%',
                        display:'flex',
                        flexDirection:'column',
                        height:'100%',
                        gap:2
                    }}>
                        <Grid item>
                        <AboutusTitle title='We Delivered, You Enjoy Your Order.' description='Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
'/>
                        </Grid>
                       <Grid item>
                        <Grid container sx={{
                            display:"flex",
                            alignItems:"center",
                            
                        }} spacing={1}>
                            {
                                LastGridData.map((e)=>(
                                    <Grid item xs={12} sx={{
                                        display:"flex",
                                        alignItems:"center"
                                    }}>
                                        <AboutuslogoGrid img={e.Icon} title={null} description={e.description}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        </Grid>
                        <Grid item>
                            <ShopNow textColor='#FFFFFF' backgroundColor='#00B207' width='30%'/>
                        </Grid>

                    </Box>
                    <Box sx={
                        {
                         
                            height:"100%",
                            width:"100%"
                        }
                    }>
                        <img src={Seller} alt='Farmer png' style={{
                             height: '120%',
                             width: '100%',
                            objectFit:'contain',
                            
                        }}/>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12}  sx={{
                padding:'1%',
                backgroundImage: "linear-gradient(#F2F2F2, #FFFFFF)"
            }}>
            <Grid sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:"center",
                alignItems:"center",
               
            }}>
                 <AboutusTitle title='Our Awesome Team' description='Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
'/>
                
            </Grid>
            <Box sx={{display:{xs:'none', md:"block"}}}>
            <TeamCarouselMolecule/>
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
            <ResponsiveCarouselMolecule/>
            </Box>
            </Grid>
            <Grid item xs={12} sx={{
                padding:'3%',
                backgroundColor:'#F2F2F2',
                display:{xs:'none', md:"block"}
            }}>
            <ClientTestimonalMolecule/>
            </Grid>
            <Grid item xs={12} sx={{
                display:{xs:'block', md:"none"}
            }}>
                <ClientResponsiveTestimonalMolecule/>
            </Grid>
            <Grid item xs={12} sx={{
                padding:'5%',
                display:{xs:'none', md:"block"}
            }}>  
                <SponsorsCarousel/>
            </Grid>
            <Grid item xs={12} sx={{
                padding:'5%',
                display:{xs:'block', md:"none"}
            }}>  
                <ResponsiveSponsorsCarousel/>
            </Grid>
        </Grid>
    </Box>
    </Container>
  )
}
