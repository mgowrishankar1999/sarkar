import { Card, CardActionArea, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useQuery } from 'react-query';
import React, { useState } from 'react';
import { topdealprod } from '../../api/getapi/getapis';
import { useNavigate } from 'react-router-dom';

export default function SmallCard({ product }) {
  const [selected, setSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  console.log(product, "hello data from the data")
  const { isLoading: isLoadingTopDeal, isError: isErrorTopDeal, data: topDealData, error: topDealError } = useQuery('topdealProducts', topdealprod);
  
  const navigate=useNavigate()

  //const {id,name,image,price,price1,ratings} = product
   const {productname:name, image_path:image,mrp:price1,salesrate:price,recno: recno,price:salesrate,barcodeno:barcodeno,batch:batch,wholesalerate:wholesalerate,avgpurcost:avgpurcost } = product
  console.log(name, image,price1,price , "my product list")
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChange = () => {
    setSelected((prevSelected) => !prevSelected);
    handlenav()
    
  };
  const handlenav=()=>{
    navigate("/projectDescription", { state: { product: product } });
  }
  if(isLoadingTopDeal){
    return(
      <p>Loading..</p>
    )
  }
  const productName = name; // Get the product name from your data

// Determine the maximum length you want to display
const maxLength = 20;

// Check if the product name exceeds the maximum length
const displayProductName =
  productName?.length > maxLength
    ? productName.substring(0, maxLength) + '...' // Truncate and add "..."
    : productName; 

  return (
    <>
    <Card
      variant='outlined'
      sx={{
        width: {xs:"80%",md:"100%"},
        height: 100,
        borderRadius: 1,
        borderColor: selected ? "#4caf50" : "#E6E6E6",
        borderWidth: selected?2:1,
        position: 'relative' ,
        marginY:2,
        
      }}
      onClick={handleChange}
      
    >
      <CardActionArea sx={{display:"flex",flexDirection:"row"}}>
      
         {image===""||image===null?<Typography style={{width:100,height:100,backgroundColor:"lightgray",textAlign:"center"}}>Images not found</Typography> :<img src={image} style={{width:100,height:100}}/>}
        <CardContent sx={{ textAlign: 'left', display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div>
            <Typography sx={{ fontSize: 15 }} color={selected?"#4caf50":"text.secondary"}>
              {displayProductName}
            </Typography>
            <Typography sx={{ fontSize: 15, fontWeight: 600,display:"flex",flexDirection:"row" }} color="#000">
              ₹{price}&nbsp;<span style={{fontWeight:300,color:"#999999",textDecoration:"line-through"}}>₹{price1}</span>
            </Typography>
            {/* <Rating name="half-rating-read" value={product.ratings} precision={0.5} readOnly size='small' /> */}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}
