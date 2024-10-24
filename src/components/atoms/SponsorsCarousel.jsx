import React from 'react'
import Slider from "react-slick";
import sponsors from '../../Data/SponsorData';
import '../../stylesheets/SponsorImage.css'
import { useQuery } from 'react-query';
import {Popbrandhome} from '../../api/getapi/getapis'


export default function SponsorsCarousel() {
  const { isLoading: isLoadingpopularbrands, isError: isErrorpopularbrands, data: popularbrandsData, error: popularbrandsError } = useQuery('popularbrands', Popbrandhome);

    var settings = {
        infinite: true,
        autoplay:true,
        slidesToShow:4,
        slidesToScroll: 1,
        speed: 2000, 
        autoplaySpeed: 2000,
        cssEase: "linear"
    
      };

      if(isLoadingpopularbrands){
        return(
          <p>
            Loading...
          </p>
        )
      }
      console.log(popularbrandsData.data,"my data popular brands")
      return (
        <Slider {...settings}>

        {popularbrandsData.data.map((e,index)=>{
         
            return(
                <div key={index} style={{width:50,height:50}}>
                    <img src={e.br_imgpath
} alt="brand logo logo" width={100} height={80}/>
                </div>

            )
               
        })
        }
        </Slider>
      );
}


export function ResponsiveSponsorsCarousel() {
    var settings = {
        infinite: true,
        autoplay:true,
        slidesToShow:2,
        slidesToScroll: 1,
        speed: 2000, 
        autoplaySpeed: 2000,
        cssEase: "linear"
    
      };
      return (
        <Slider {...settings}>

        {sponsors.map((e,index)=>{
            return(
                <div key={index}>
                    <img src={e.logo} alt="company logo"/>
                </div>

            )
               
        })
        }
        </Slider>
      );
}