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
export default function ClientTestimonalMolecule(props) {
console.log(props)
    
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth='lg'>
     <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={3}>
       <Grid item xs={12}>
         <Typography  sx={{
            fontSize:18,
            fontWeight:400,textAlign:"center",color:"#00B207"
         }}>Client Testimonail</Typography>
           <Typography variant='h3' sx={{
            fontSize:24,
            fontWeight:600,textAlign:"center"
         }}>What our Client Says</Typography>
       </Grid>
     
       <Grid item xs={12}>
       <Swiper
        slidesPerView={props.slidesPerView}
        spaceBetween={30}
        onInit={(swiper) => {
            // swiper.params.navigation.prevEl = prevRef.current;
            // swiper.params.navigation.nextEl = nextRef.current;
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