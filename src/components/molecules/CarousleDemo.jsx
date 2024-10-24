import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';
import TeamCarousel from '../atoms/TeamCarousel';

export default function CarousleDemo() {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      {/* <Swiper
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div style={{
            position:"relative",
            right:0,
            top:0
        }}>
        <button ref={nextRef}>

        <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </button>
        </div>

        <button ref={prevRef}>
        <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </button>
     
      </Swiper> */}
      <div style={{
        background:'red',
        position:'relative'
      }}>
        <div style={{
            backgroundColor:'yellow',
            display:"flex",
            justifyContent:'center',
            alignItems:"center",
            position:"relative"
        }}>
        <div style={{
            width:'70%',
            height:"300px"
        }}>
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
        <SwiperSlide> <TeamCarousel/></SwiperSlide>
        <SwiperSlide> <TeamCarousel/></SwiperSlide>
        <SwiperSlide> <TeamCarousel/></SwiperSlide>
        <SwiperSlide> <TeamCarousel/></SwiperSlide>
        <SwiperSlide> <TeamCarousel/></SwiperSlide>
        <SwiperSlide> <TeamCarousel/></SwiperSlide>
        <SwiperSlide> <TeamCarousel/></SwiperSlide>
        <SwiperSlide> <TeamCarousel/></SwiperSlide>
        </Swiper>
        </div>

        </div>
            

            <div style={{
                position:'absolute',
                top:'25%',
                left:'5%'
            }}>
                 <button ref={nextRef}>

<svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
</button>
            </div>
            <div style={{
                position:'absolute',
                top:'25%',
                right:'5%'
            }}>
                  <button ref={prevRef}>

<svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
</button>
            </div>
      </div>
    </>
  );
}