import React from 'react';
import Slider from "react-slick";
import '../../stylesheets/SponsorImage.css';
import home from '../../Data/HomeAd';
import { Box, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { banners } from '../../api/getapi/getapis';

export default function ImageSwiper() {
    const { isLoading: isLoadingBanner, isError: isErrorBanner, data: bannerData, error: bannerError } = useQuery('banner', banners);


    if(isLoadingBanner){
        <Typography>Loading...</Typography>
    }
    
    const data = bannerData ? bannerData.banner.data : [];


    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToScroll: 1,
        arrows: false, // To remove forward and backward buttons
    };

    if (data.length === 1) {
        settings.infinite = false;
    } else {
        settings.infinite = true;
    }

    return (
        <Slider {...settings}>
            {data.map((e) => (
                <div style={{width:"100%",height:500}}   key={e.b_recno}>
                  <img src={e.b_imgpath}  width={"100%"} height={600} />
                  {/* <Typography>HelloWorld</Typography> style={{width:"100%",height:{md:"100%", xs:"100%"}}} */}
                </div>

            ))}
        </Slider>
    );
}