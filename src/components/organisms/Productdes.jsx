import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductFull from '../molecules/ProductFull';
import { useLocation } from 'react-router-dom';
import Check from '../../assets/Check.svg'
import Video from "../../assets/Video.png"
import Discount from '../../assets/Discount.png';
import Organic from '../../assets/Organic.png'
import ProductCard from '../molecules/ProductCard';
import { related } from '../../index.js';


export default function Productdes() {
    const location = useLocation();
    const product = location.state.product;
    console.log("check",product)
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleButtonClick = (index) => {
        setSelectedButtonIndex(index);
    };

    const data = [
        {
            value: "Descriptions"
        },
        {
            value: "Additional Information"
        },
        {
            value: "Customer Feedback"
        }
    ];
    const des =[
        {
            item:"100 g of fresh leaves provides."
        },{
            item:"Aliquam ac est at augue volutpat elementum."
        },{
            item:"Quisque nec enim eget sapien molestie."
        },{
            item:"Proin convallis odio volutpat finibus posuere."
        }
    ]

    return (
        <Box sx={{flex:1}}>
            <Box sx={{ px: {md:20}, my: 3 }}>
                <ProductFull product={product} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center",gap:{md:5},px:{xs:1} }}>
                {data.map((item, index) => (
                    <Button
                        key={index}
                        sx={{
                            bgcolor: "#fff",
                            ":hover": { backgroundColor: "#fff" },
                            fontSize: 16,
                            fontWeight: 600,
                            color: selectedButtonIndex === index ? "#1A1A1A" : "#808080",
                            textTransform: "capitalize",
                            height: 50,
                            borderBottom: selectedButtonIndex === index ? "5px solid #00B207" : "none"
                        }}
                        onClick={() => handleButtonClick(index)}
                    >
                        {item.value}
                    </Button>
                ))}
            </Box>
            <Divider variant='fullWidth' sx={{mb:1}}/>
            <Grid container spacing={2} sx={{px:{md:20,xs:1}}}>
        <Grid item md={7}>
        <Box sx={{my:2}}>
                    <Typography sx={{fontSize:16,color:"#808080",my:2}}>Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.</Typography>
                    <Typography sx={{fontSize:16,color:"#808080"}}>Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. </Typography>
                </Box>
                <Box>
                {des.map((item, index) => (
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}>
                    <img src={Check} style={{width:"20px"}}/>
                    <Typography key={index} sx={{fontSize:16,color:"#808080",my:1}}>{item.item}</Typography>
                    </div>
                ))}
                </Box>
                <Typography sx={{fontSize:16,color:"#808080",my:1}}>Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. </Typography>
        </Grid>
        <Grid item md={5} xs={12} sx={{my:2}}>
            <img src={Video} style={{width:"100%"}}/>
            <Box sx={{border:"1px solid gray",display:{md:"flex"},flexDirection:"row",gap:2,p:2,borderRadius:1,my:5}}>
                <img src={Discount} style={{width:"90%"}}/>
                <img src={Organic} style={{width:"90%"}}/>
            </Box>
        </Grid>
      </Grid>
      <Box sx={{px:{md:20},my:5}}>
        <Typography sx={{fontSize:30,fontWeight:600,color:"#1A1A1A",textAlign:"center",my:3}}>Related Products</Typography>
        <Grid container spacing={{md:2,xs:10}} sx={{px:{xs:1}}} >
         {/* {related.map((item) => (
          <Grid item md={3} xs={5}   key={item.id}>
            <ProductCard key={item.id} product={item} />
          </Grid>
        ))} */}
      </Grid>
      <Typography sx={{fontSize:30,fontWeight:600,color:"#1A1A1A",textAlign:"center",mt:5}}>Recently Viewed</Typography>
        <Grid container spacing={2} sx={{my:2,px:{xs:1}}} >
         {/* {related.map((item) => (
          <Grid item md={3}  key={item.id}>
            <ProductCard key={item.id} product={item} />
          </Grid>
        ))} */}
      </Grid>

      </Box>
    
            
        </Box>
    );
}
