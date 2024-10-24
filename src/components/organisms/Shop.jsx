import { Divider, Grid, MenuItem, TextField, Typography,Box,List,IconButton } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import Filterbutton from '../atoms/Filterbutton'
import PriceSlider from "../atoms/PriceSlider"
import AllCategory from '../molecules/AllCategory'
import Ratings from '../molecules/Ratings'
import PopularTag from '../molecules/PopularTag'
import { Sale, Sort, product } from '../..'
import Banner from "../../assets/Banner.png"
import SmallCard from '../molecules/SmallCard'
import PaginationShop from '../molecules/PaginationShop'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Close, Menu, Tune } from '@mui/icons-material';
import { useQuery } from 'react-query';

import { GetAllCategoryFilter, GetSubCategory, GetProductType } from '../../api/getapi/shopPageApi';
import AllcategoryFilterSkeleton from '../skeleton/AllcategoryFilterSkeleton';
import { useSelector } from 'react-redux';
import SubCategory from '../molecules/SubCategory';


export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [open, setOpen] = useState(false);

  const searchTerm = useSelector((state) => state.products.ProductData[0].searchTerm)
  useEffect(()=>{
  console.log(searchTerm,"redux state")

  },[searchTerm])
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const handleCategorySelect = (category) => {
      setSelectedCategory(category);
  };

 
  const handlePriceRangeSelect = (priceRange) => {
      setSelectedPriceRange(priceRange);
  };

  const handleRatingSelect = (rating) => {
      setSelectedRating(rating);
  };

  const handleTagSelect = (tag) => {
      if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
      } else {
          setSelectedTags([...selectedTags, tag]);
      }
  };

  const handleFilterClick = () => {
      console.log("Selected category:", selectedCategory);
      console.log("Selected price range:", selectedPriceRange);
      console.log("Selected rating:", selectedRating);
      console.log("Selected tags:", selectedTags);
  };

  const DrawerList = (
    <Box sx={{ width: 250,px:1 }} role="presentation" >
      <IconButton onClick={toggleDrawer(false)} sx={{right:0}}>
        <Close/>
      </IconButton>
      <List>
          <ListItem disablePadding>
          <Filterbutton onFilterClick={handleFilterClick}/>
          </ListItem>
          <ListItem disablePadding>
            <AllCategory onSelectCategory={handleCategorySelect}/>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
            <SubCategory onSelectCategory={handleCategorySelect}/>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
            <PriceSlider onSelectCategory={handlePriceRangeSelect}/>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
            <Ratings onSelectCategory={handleRatingSelect}/>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
            <PopularTag onSelectCategory={handleTagSelect}/>
          </ListItem>
      </List>
    </Box>
  );



  
  return (
    <Grid container component="main" sx={{marginY:{md:5,xs:2},paddingLeft:2,paddingRight:5,mb:{xs:5}}}>
      <Grid  item xs={12} sx={{display:{md:"none",xs:"block",}}}>
        <Button onClick={toggleDrawer(true)}><Tune/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      </Grid>
      
         <Grid
          item
          xs={4}
          md={2}
          sx={{width:200,display:{xs:"none",md:"block"}}}
         
        >
         
            <Filterbutton onFilterClick={handleFilterClick}/>
            <AllCategory onSelectCategory={handleCategorySelect}/>
            <Divider />
            <SubCategory onSelectCategory={handleCategorySelect}/>
            <Divider/>
            {/* <PriceSlider onSelectCategory={handlePriceRangeSelect}/> */}
            <Divider />
            {/* <Ratings onSelectCategory={handleRatingSelect}/> */}
            <Divider />
            <PopularTag onSelectCategory={handleTagSelect}/>
            <img src={Banner} style={{marginTop:"5%",width:"100%"}}/>
            <div style={{marginTop:10}}>
            <Typography sx={{fontSize:20,fontWeight:600}}>Sale Products</Typography>

         {/* {Sale.map((product) => (
             <SmallCard key={product.id} product={product} />
        ))} */}
       </div>
            </Grid>
            
        <Grid item xs={10} sm={8} md={10} sx={{paddingX:{md:2}}} >
          <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:{xs:5}}}>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Typography sx={{fontSize:15,textAlign:"center",mr:2}}>Sort By:</Typography>
          <TextField
          select
          defaultValue="Latest"
          sx={{width:200,padding:0,color:"#000"}}
        >
          {Sort.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div>
          <Typography style={{fontSize:16}}><span style={{fontWeight:600}}>52</span> Result Found</Typography>
        </div>
          </Box>
        <Grid container spacing={2} rowSpacing={5} sx={{marginTop:"1%",ml:{md:1,xs:0.2},mb:{xs:5}}} >
        <PaginationShop/>
      </Grid>
        </Grid>
        

    </Grid>
  )
}
