import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';
import TeamCarousel from '../atoms/TeamCarousel';
import TestimonialCarousel from '../atoms/TestimonialCarousel';
import  Box  from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';
import { Container } from '@mui/material';
import  Grid  from '@mui/material/Grid';
import Aoorw2 from '../../assets/aboutus/Testimonial/Backward.svg'
import Aoorw1 from '../../assets/aboutus/Testimonial/Forward.svg'

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  typography: {
    "fontFamily": `"Poppins", sans-serif`,
    "fontSize": 13,
    "fontWeight": 500,
    body1:{
      color:"#687693"
    }
    
   }
})
export default function ClientTestimonalMolecule() {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth='lg'>
     <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={3}>
       <Grid item xs={8}>
         <Typography variant='h3' sx={{
            fontSize:36,
            fontWeight:600
         }}>Client Testimonail</Typography>
       </Grid>
       <Grid item xs={4} sx={{
        
       
       }}>
        <Box sx={{
            display:"flex",
            justifyContent:"flex-end",
            alignItems:"center"
        }}>
       <Box >
            <button ref={prevRef} style={{
                   background: 'none',
                   border: 'none',
                   outline: 'none',
                   boxShadow:"none"
                 }}>

               <img src={Aoorw2} alt="Backward"/>
            </button>
            </Box>
            <Box style={{
            }}>
           <button ref={nextRef} style={{
                   background: 'none',
                   border: 'none',
                   outline: 'none',
                   boxShadow:"none"
                 }}>

               <img src={Aoorw1} alt="Backward"/>
            </button>
            </Box>
            </Box>
       </Grid>
       <Grid item xs={12}>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        pagination={{
          type: null,

        }}

        // navigation={{

        //     prevEl: navigationPrevRef.current,
        //     nextEl: navigationNextRef.current,
        //   }}
        //   onBeforeInit={(swiper) => {
        //     swiper.navigation.nextEl = navigationNextRef.current;
        //     swiper.navigation.prevEl = navigationPrevRef.current;
        //   }}
        
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
        <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
        <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
        <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
        <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
        <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
        <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
        <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
        </Swiper>
       </Grid>
     </Grid>
   </Box>
   </Container>
   </ThemeProvider>
  );
}


//Responsive 
export  function ClientResponsiveTestimonalMolecule() {

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const prevRef = useRef(null);
const nextRef = useRef(null);
return (
  <ThemeProvider theme={theme}>
  <Container maxWidth='lg'>
   <Box sx={{ flexGrow: 1 }}>
   <Grid container spacing={3}>
     <Grid item xs={8}>
       <Typography variant='h3' sx={{
          fontSize:36,
          fontWeight:600
       }}>Client Testimonail</Typography>
     </Grid>
     <Grid item xs={4} sx={{
      
     
     }}>
      <Box sx={{
          display:"flex",
          justifyContent:"flex-end",
          alignItems:"center"
      }}>
     <Box >
          <button ref={prevRef} style={{
                 background: 'none',
                 border: 'none',
                 outline: 'none',
                 boxShadow:"none"
               }}>

             <img src={Aoorw2} alt="Backward"/>
          </button>
          </Box>
          <Box style={{
          }}>
         <button ref={nextRef} style={{
                 background: 'none',
                 border: 'none',
                 outline: 'none',
                 boxShadow:"none"
               }}>

             <img src={Aoorw1} alt="Backward"/>
          </button>
          </Box>
          </Box>
     </Grid>
     <Grid item xs={12}>
     <Swiper
      slidesPerView={1}
      spaceBetween={30}
      onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      pagination={{
        type: null,

      }}

      // navigation={{

      //     prevEl: navigationPrevRef.current,
      //     nextEl: navigationNextRef.current,
      //   }}
      //   onBeforeInit={(swiper) => {
      //     swiper.navigation.nextEl = navigationNextRef.current;
      //     swiper.navigation.prevEl = navigationPrevRef.current;
      //   }}
      
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
      <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
      <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
      <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
      <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
      <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
      <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
      <SwiperSlide> <TestimonialCarousel/></SwiperSlide>
      </Swiper>
     </Grid>
   </Grid>
 </Box>
 </Container>
 </ThemeProvider>
);
}