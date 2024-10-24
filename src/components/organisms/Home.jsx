import { Box, Button, Container, Grid, Paper, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../molecules/GroupBtn'
import Banner from '../../assets/Home/Banner.png'
import summer from '../../assets/Home/summer.png'
import { Ad, check, check2, check3 } from '../../index.js'
import { Bfeature } from '../../index.js'
import { product } from '../../index.js'
import { related } from '../../index.js'
import ProductCard from '../molecules/ProductCard'
import Ad3 from '../../assets/Home/Ad3.png'
import SmallCard from '../molecules/SmallCard'
import DiscountBanner from "../../assets/Home/Discount.png"
import Milk from '../../assets/Home/Milkbanner.png'
import C1 from '../../assets/Home/C1.png'
import C2 from '../../assets/Home/C2.png'
import C3 from '../../assets/Home/C3.png'
import ClientTestimonalMolecule from '../molecules/ClientTestimonalMolecule'
import { ResponsiveSponsorsCarousel } from '../atoms/SponsorsCarousel'
import SponsorsCarousel from '../atoms/SponsorsCarousel'
import ImageSwiper from '../atoms/ImageSwiper'
import HomeCat from '../atoms/HomeCat'
import { CatwiseProd,recentprod, banners, homeCategories, topdealprod, fastmovingprod } from '../../api/getapi/getapis.js'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  export default function Home() {
  const { isLoading: isLoadingTopDeal, isError: isErrorTopDeal, data: topDealData, error: topDealError } = useQuery('topdealProducts', topdealprod);
  const { isLoading: isLoadingrecentprod, isError: isErrorrecentprod, data: recentprodData, error: recentprodError } = useQuery('recentprod', recentprod);
  const { isLoading: isLoadinghomecat, isError: isErrorhomecat, data: homecatData, error: homecatError } = useQuery('homecategories', homeCategories);
  const { isLoading: isLoadingfastmovingprod, isError: isErrorfastmovingprod, data: fastmovingprodData, error: fastmovingprodError } = useQuery('fastmovingprod', fastmovingprod);
  const { isLoading: isLoadingCatwiseProd, isError: isErrorCatwiseProd, data: CatwiseProdData, error: CatwiseProdError } = useQuery('CatwiseProd', () => CatwiseProd(10));
  
  // const { isLoading: isLoadinghomecat, isError: isErrorhomecat, data: homecatData, error: homecatError } = useQuery('homecategories', homeCategories);

    const [selectedItem, setSelectedItem] = useState(null);
    const home=180
    


    if (isLoadinghomecat || isLoadingTopDeal || isLoadingrecentprod || isLoadingfastmovingprod||isLoadingCatwiseProd) {
      return <Typography>Loading...</Typography>;
    }

    console.log(recentprodData, "recentprodDatawa")
    const TopDeal=topDealData?topDealData.data:[]
    const FastmovingData = fastmovingprodData?fastmovingprodData.data:[]
    console.log(TopDeal, topDealData, fastmovingprodData,CatwiseProdData.data,FastmovingData,"recentprodDatawa")
    let Topcat=[]
    if (homecatData && homecatData.categories.data) {
      // Sort the data by dp_recno
      Topcat = homecatData.categories.data.sort((a, b) => a.dp_recno - b.dp_recno);
    }




  return (
    <Container maxWidth>
    <Box sx={{p:2}}>
         <Grid container spacing={2} sx={{my:2}}>
                <Grid item md={2}>
                   <HomeCat/>
                </Grid>
                <Grid item xs={12} md={10}>
                <ImageSwiper  />
               

              
                </Grid>
            </Grid>
            <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:{xs:'wrap', md:'nowrap'}}}>
                {Bfeature.map((item,index)=>(
                 <Box key={index} sx={{display:"flex",flexDirection:"row",gap:2, borderBottom: `4px solid ${selectedItem === index ? 'transparent' : 'transparent'}`, // Conditionally apply border color
                 paddingBottom: 2,flexWrap:{xs:'wrap', md:'nowrap'}, width:"50%"}}  onClick={() => setSelectedItem(index)}>
                        <div>
                            <img src={item.icon} width={50}/>
                        </div>
                        <div>
                            <Typography sx={{fontSize:{xs:16, md:18},fontWeight:600}}>{item.title}</Typography>
                            <Typography sx={{fontSize:{xs:12, md:14},fontWeight:400,color:"grey", width:{xs:"80%"}}}>{item.des}</Typography>
                        </div>

                    </Box>
                ))}
            </Box>
            <Box sx={{ width:{xs:"100%" }, height:{xs:"100%"},overflowX:{xs:"auto"},overflowY:{xs:"hidden"},display:"flex",flexDirection:{md:"row",xs:"column"},justifyContent:"center",gap:{xs:"10%"}}}>
                {Ad.map((item,index)=>(
                    <Box sx={{mx:2}} key={index}>
                        <img src={item.img} width="100%"/>
                    </Box>
                ))
                }
            </Box>
            <Box sx={{mt:5}}>
                <Typography sx={{textAlign:"center",fontSize:14,color:"#00B207"}}>Category</Typography>
                <Typography sx={{textAlign:"center",fontSize:25,fontWeight:600}}>Shop by Top Categories</Typography>
                <Grid spacing={2.5} container sx={{ my: 1,justifyContent:"center"}}>
                {Topcat.map((e) => (
  
  <Grid item key={e.dp_recno} xs={12} sm={6} md={1.7} sx={{ justifyContent: "center", alignItems: "center" }}>
  <Item variant='outlined' style={{width:180,height:200}}>
      <img src={e.dp_imgpath} alt={e.dp_name} style={{ width: 160, height: 160 }} />
      {/* Added alt attribute for accessibility */}
      <Typography sx={{ textAlign: "center", fontSize: 15, fontWeight: 600, color: "#000" }}>{e.dp_name}</Typography>
    </Item>
  </Grid>
)
)}
</Grid>
            </Box>
            <Box sx={{mt:5}}>
            <Typography sx={{textAlign:"center",fontSize:14,color:"#00B207"}}>Products</Typography>
                <Typography sx={{textAlign:"center",fontSize:25,fontWeight:600}}>Our Featured Products</Typography>
                <Box sx={{display:"flex",flexDirection:{md:"row",xs:"column"},my:2,gap:2}} xs={12}>
                    <img src={summer} width={{md:150,xs:"100%"}} height={250}/>
                    <Grid container spacing={2} sx={12} md={12} sm={12} >
         {recentprodData.data.map((product,index) =>{ 
         if(index < 6){
          return(
            <Grid item xs={12} md={2} key={product.id}>
            <ProductCard width={home} key={product.productdetail[0].recno} product={product.productdetail[0]} />
          </Grid>  
          )
         }
        }
        //  (
        //   <Grid item xs={12} md={2} key={product.id}>
        //     <ProductCard width={home} key={product.id} product={product}/>
        //   </Grid>
        // )
      )}
      </Grid>
</Box>
<Box sx={{display:"flex",flexDirection:"row",mt:5}}>
  <Grid container spacing={2}>
  <Grid item  md={3} xs={12}>
  <Typography sx={{fontSize:20,fontWeight:600}}>Hot Deals</Typography>
          {TopDeal.map((item,index)=>{
            
          if(index < 3){
            return(
          
    <SmallCard key={item.productdetail[0].recno} product={item.productdetail[0]} />
          )}})}
</Grid>
            <Grid item  md={3} xs={12}>
             <Typography sx={{fontSize:20,fontWeight:600}}>Best Seller</Typography>

          {FastmovingData.map((item,index)=>{
            
            if(index < 3){
              return(
            
      <SmallCard key={item.productdetail[0].recno} product={item.productdetail[0]} />
            )}})}
</Grid>
<Grid item  md={3} xs={12}>
<Typography sx={{fontSize:20,fontWeight:600}}>Top Rated</Typography>
{CatwiseProdData.data.map((item,index)=>{
            
            if(index < 3){
              return(
            
      <SmallCard key={item.productdetail[0].recno} product={item.productdetail[0]} />
            )}})}
         </Grid>
         <Grid item  md={3} xs={12}>
<Typography sx={{fontSize:20,fontWeight:600}}>Newly Arrival</Typography>

           {recentprodData.data.map((item,index)=>{
            
            if(index < 3){
              return(
            
      <SmallCard key={item.productdetail[0].recno} product={item.productdetail[0]} />
            )}})}

            </Grid>

  </Grid>
  <Box sx={{display:{xs:"none",md:"flex"}, alignItems:"center",marginTop:3,pl:1}}>
  <img src={Ad3} style={{width:300}}/>
  </Box>
</Box>
<Grid container spacing={2} sx={{my:2}}>
           <Grid item md={9} xs={12}>
            <img src={DiscountBanner} width={"100%"} height={350}/>
           </Grid>
           <Grid item md={3} xs={12}>
            <img src={Milk} width={"100%"} height={350}/>
           </Grid>
  </Grid>
  <Grid container spacing={2} sx={{my:2}}>
           <Grid item md={9} sx={{display:"flex",flexDirection:{md:"row", xs:"column"},gap:2}} xs={12}>
            <div>
            <img src={C1} width={"100%"} height={350}/>
            </div>
            <div>
            <img src={C2} width={"100%"} height={350}/>
            </div>
           </Grid>
           <Grid item md={3} xs={12}>
            <img src={C3} width={"100%"} height={350}/>
           </Grid>
  </Grid>
  <Box sx={{my:2}}>
    <Box sx={{mb:2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <Typography sx={{fontSize:20,fontWeight:600}}>Featured Products</Typography>
      <Button sx={{alignItems:"center",color:"#000",textTransform:"capitalize"}}>View All →</Button>
    </Box>
                    <Grid container spacing={2}>
         {FastmovingData.map((product,index) => {
          if(index < 6){
            return  (
              <Grid item xs={12} md={2}  key={product.productdetail[0].recno}>
                <ProductCard key={product.id} product={product.productdetail[0]}/>
              </Grid>
            )
          }})}
      </Grid>
      </Box>
      <Grid container >
      <Grid item xs={12} sx={{
                padding:'3%',
                display:{xs:'none', md:"block"},
                backgroundColor:'#F2F2F2'
            }}>
            <ClientTestimonalMolecule slidesPerView ={3}/>
            </Grid>
            <Grid item xs={12} sx={{
                padding:'3%',
                display:{xs:'block', md:"none"},
                backgroundColor:'#F2F2F2'
            }}>
            <ClientTestimonalMolecule slidesPerView ={1}/>
            </Grid>
            <Grid item xs={12} sx={{
                padding:'3%',
                display:{xs:'none', md:"block"}
            }}>  
            <SponsorsCarousel/>
            </Grid>
            <Grid item xs={12} sx={{
                padding:'5%',
                display:{xs:'block', md:"none"}
            }}>  
                <ResponsiveSponsorsCarousel/>
            </Grid>
        </Grid>
            </Box>
    </Box>
    </Container>
  )
}
