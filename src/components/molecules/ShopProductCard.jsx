import { CloseOutlined } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, Card, CardActionArea, CardContent, IconButton, Modal, Rating, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';
import ProductFull from './ProductFull';
import Counter from '../atoms/Counter';



export default function ShopProductCard({ product,width }) {
  const [selected, setSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm','xs'));
  const navigate=useNavigate()
  
  console.log(product,"hi")
  const {recno,image_path,productname,
    mrp,salesrate
  } = product[0]


 


  const handleIconClick = (index) => {
    setSelectedIcon(index);
  };

  
  const handleOpen = (productId) => {
    setOpen(true);
  };  
  const handleClose = () => setOpen(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handlenav=()=>{
    navigate("/projectDescription", { state: { product: product } });
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChange = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  const productName = productname; // Get the product name from your data

// Determine the maximum length you want to display
const maxLength = 15;

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
        width: {md:width !== undefined?width:220,xs:170},
        height: {md:250,xs:250},
        borderRadius: 1,
        p:0.5,
        borderColor: selected ? "#4caf50" : "#E6E6E6",
        borderWidth: selected?2:1,
        position: 'relative' 
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handlenav}
    >
      <CardActionArea>
        {isHovered && ( // Show icons only when hovered
          <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1,width:40,height:40 }}>
            <IconButton style={{ color: '#000',backgroundColor:"#fff" }}>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </div>
        )}
        {isHovered && (
          <div style={{ position: 'absolute', marginTop: "30%", right: 10, zIndex: 1,width:40,height:40  }}>
            <IconButton style={{ color: '#000',backgroundColor:"#fff" }} onClick={(event) => { event.stopPropagation(); handleOpen(); }}>
              <VisibilityOutlinedIcon />
            </IconButton>
          </div>
        )}
        <div style={{width:"100%",height:120}}>
       <img src={image_path} alt={productname} style={{width:"100%",height:120}} />
       </div>
        <CardContent sx={{ textAlign: 'left', display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",px:{xs:1} }}>
          <div>
            <Typography sx={{ fontSize: {md:12,xs:12} }} color="text.secondary">
              {displayProductName}
            </Typography>
            <Typography sx={{ fontSize: {md:18,xs:15}, fontWeight: 700,display:"flex" }} color="#000">
              ₹<Typography sx={{fontSize:18,textDecoration:"line-through",color:"grey",mr:1}}>{mrp}</Typography> {salesrate}
            </Typography>
          </div>
        </CardContent>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Counter width={25} height={25} fullWidth={100}/>
            <IconButton sx={{ width: {md:40,xs:30}, height: {md:40,xs:30}, backgroundColor: selected ? "#4caf50" : "#e0e0e0", borderRadius: 20, "&:hover": { backgroundColor: selected ? "#4caf50" : "gray" } }} onClick={(event) => { event.stopPropagation(); handleChange(); }}><ShoppingBagOutlinedIcon sx={{ fontSize: 20, color: selected ? "#fff" : "#000" }} /></IconButton>
          </Box>
      </CardActionArea>
    </Card>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box
          sx={{
            position: 'absolute',
            display: "flex",
            flexDirection: "row",
            width: {md:"70%",xs:"80%"},
            height: { md: 450,sm:750, xs: 'auto' },
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            p: {md:6},
            px:{xs:4},
            overflowY: isMobile ? 'scroll' : 'auto', // Apply scroll when on mobile
            maxHeight: isMobile ? '80vh' : 'auto', // Limit max height on mobile
          }}>
           
            <IconButton onClick={handleClose} sx={{position:"absolute",zIndex:1,right:10,top:5 }}>
              <CloseOutlined sx={{ color: "#000", fontSize: 30}} />
            </IconButton>
          
          <ProductFull product={product[0]} />
        </Box>
      </Modal>
    </>
  );
}
