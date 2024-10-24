import React from 'react'
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import  IconButton  from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor:
    "#CC0000",
    width:15,
    color:"#fff",
    height:15,
    borderRadius:'50%',
    padding:'10px',
    
  },
}));

function ShopIcon() {
  const navigate=useNavigate()
  const state=useSelector((state)=>state.userData.addtocart)
  console.log("Check@111",state.cart.length)
  const count = state.cart.length

  return (
    <IconButton onClick={()=>navigate('/AddTocart')}>
    <StyledBadge badgeContent={count}>
    <HiOutlineShoppingBag size={27} />
  </StyledBadge>
  </IconButton>
  )
}

export default ShopIcon