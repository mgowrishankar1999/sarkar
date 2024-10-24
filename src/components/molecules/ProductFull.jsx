import { Box, Button, Divider, Grid, IconButton, Rating, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Footicon } from '../..';
import Counter from '../atoms/Counter';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import ShopingBag from '../../assets/Shopingbag.svg'
import { NavLink } from 'react-router-dom';


export default function ProductFull({product}) {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [count, setCount] = useState(0); 
    const [selected, setSelected] = useState(false);


    const handleIconClick = (index) => {
        setSelectedIcon(index);
      };

      const handleAdd = () => {
       setSelected(true)
        dispatch(addTocart({ recno: product.recno,img:product.image_path,productName:product.productname,price:product.salesrate,mrp:product.mrp,barcodeno:product.barcodeno,batch:product.batch,wholesalerate:product.wholesalerate,avgpurcost:product.avgpurcost, count:count }));
      };

  return (
    <Grid container sx={{display:"flex",flexDirection:"row"}}>
          <Grid item md={4} xs={12}>
          <img 
    src={product.image_path} 
    style={{ 
        width: '300px', 
        maxWidth: '100%', 
        '@media (max-width: 600px)': {
            width: '80%' 
        } 
    }} 
/>
          </Grid>

            <Grid item md={8} xs={12}>

              <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
              <Typography sx={{fontSize:28,fontWeight:600,mr:3,px:{xs:1}}}>
                {product.productname}
              </Typography>
              <div style={{padding:3,backgroundColor:"#20B52633",borderRadius:5}}><Typography sx={{fontSize:16,mx:1,color:"#2C742F"}}>In stock</Typography></div>
              </div>
              <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",gap:2,pl:{xs:1}}}>
              {/* <Rating name="half-rating-read" value={product.ratings} precision={0.5} readOnly />
              <Typography sx={{textAlign:"center",color:"#666666",fontSize:16}}>{product.ratings}&nbsp;Review</Typography> */}
                <Typography sx={{fontSize:16,mx:{md:5},textAlign:"center",color:"#666666"}}><span style={{fontWeight:600,fontSize:16,color:"#1a1a1a"}}>SKU:</span>{product.recno}</Typography>
      
              </Box>
              <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"2%",px:1}}>
                <Typography sx={{color:"#B3B3B3",textDecoration:"line-through",fontSize:20,fontWeight:400,mr:1}}>₹{product.mrp}</Typography>
              <Typography id="modal-modal-description" sx={{ color:"#2C742F",fontSize:20,fontWeight:600,mx:1 }}>
                ₹{product.salesrate}
              </Typography>
              <div style={{padding:3,backgroundColor:"#EA4B481A",borderRadius:20}}><Typography sx={{fontSize:15,mx:1,color:"#EA4B48"}}>64% off</Typography></div>
              </Box>
              <Divider variant='fullWidth' sx={{my:2}}/>
              <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",px:{xs:1}}}>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                  <Typography sx={{fontSize:15,fontWeight:400,mr:1}}>Brand : {product.brandname}</Typography>
                {/* <img src={product.brandname} style={{width:"40%"}}/> */}
                </div>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <Typography sx={{fontSize:15,fontWeight:400,mr:1,ml:5}}>Share item :</Typography>
                {
      Footicon.map((item,index)=>(
        <IconButton key={index} color="primary" sx={{ backgroundColor: selectedIcon === index ? '#00B207' : 'inherit',":hover":{backgroundColor:"#00B207"},gap:2 }} onClick={() => handleIconClick(index)} aria-label="directions">
        <img src={item.icon} style={{width:25,height:25,color:selectedIcon === index ? "#fff":"inherit"}}/>
      </IconButton>
      ))
    }
                </div>

              </Box>
              <Typography sx={{mt:2,fontWeight:400,fontSize:15,textAlign:"justify",px:{xs:1}}}>
                {product.productdes}
              </Typography>
              <Divider variant='fullWidth' sx={{my:2}}/>
              <Box sx={{display:{md:"flex",sm:"flex"},flexDirection:"row",justifyContent:"space-between",alignItems:"center",px:{xs:1}}}>
              {selected?<Counter  onCounterChange={(newCount) => setCount(newCount)}
            count={count}
            setCount={setCount} // Update count state
            recno={product}/>:
              <Button onClick={handleAdd} sx={{bgcolor:"#00B207",paddingX:{md:12,xs:2},mt:{xs:2},":hover":{backgroundColor:"#00B207"},fontSize:16,fontWeight:600,color:"#fff",textTransform:"capitalize",borderRadius:20,gap:2,height:50}}>Add to Cart<img src={ShopingBag}/></Button>}
              <IconButton sx={{ml:{xs:2},mt:{xs:2},width:50,height:50,bgcolor:"#20B5261A",':hover':{backgroundColor:"#20B5261A"}}}>
                <FavoriteBorderOutlined sx={{color:"#2C742F"}}/>
              </IconButton>
              </Box>
              <Divider variant='fullWidth' sx={{my:2}}/>
              <Typography sx={{fontSize:15,color:"#808080",mb:1,fontWeight:400,textAlign:"left"}}><span style={{fontSize:16,fontWeight:600,color:"#1A1A1A"}}>Category:</span>&nbsp;{product.producttype}</Typography>
              <Typography sx={{fontSize:15,color:"#808080",mb:1,fontWeight:400,textAlign:"left"}}><span style={{fontSize:16,fontWeight:600,color:"#1A1A1A"}}>Sub-Category:</span>&nbsp;{product.subproducttype}</Typography>

              {/* <Typography sx={{fontSize:15,color:"#808080",fontWeight:400}}><span style={{fontSize:16,fontWeight:600,color:"#1A1A1A"}}>Tag:</span>&nbsp;Vegetables&nbsp;Healthy&nbsp;<span style={{color:"#1A1A1A",textDecoration:"underline",fontSize:15,fontWeight:400}}>Chinese</span>&nbsp;Cabbage&nbsp;Green Cabbage</Typography> */}
            </Grid>

        </Grid>
  )
}
