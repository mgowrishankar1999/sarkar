import React, { useEffect, useState } from 'react';
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
} from '@tanstack/react-query';
import { useQuery,useMutation } from 'react-query';
import { productCard } from '../../index.js'
// import { Sort } from '../../index.js'
//import ProductCard from '../molecules/ProductCard'
import ShopProductCard from './ShopProductCard.jsx';
import { Grid, IconButton, Typography,Box, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector,useDispatch  } from 'react-redux';
import { SearchProduct } from '../../api/getapi/getapis.js';
import { addBrandName, addProductType, addSubProductType } from '../../Redux/reducers/product-reducer.js';

const queryClient = new QueryClient();



export default function PaginationShop() {
  const searchTerm = useSelector((state)=> state.products.ProductData[0].searchTerm)
  const mutation = useMutation((searchParams) => SearchProduct(searchParams));
  const [loading, setLoading] = useState()
  const [SearchProductData1,setSearchProductData] = useState()
  const { isLoading: isLoadingSearchProduct, isError: isErrorSearchProduct, data: SearchProductData, error: SearchProductError } = mutation;
  const dispatch = useDispatch()
  const GettheTopValues = (paras,paras2) => {
    const finalProduct = []
    paras2.data.forEach((e) => {
        const matchingProducts = Object.keys(e.productdetail[0]).filter((product) => {
          if(product === paras){
            return e.productdetail[0][product]
          }
        } );
        finalProduct.push(e.productdetail[0][matchingProducts]);  // Spread operator to add individual elements
      });

        const count = finalProduct.reduce((acc, item) => {
        // Split the item to handle the category (before ".") and potentially a number (after ".")
        console.log(item)
        // Initialize a count for the category if it doesn't exist in the accumulator
        acc[item] = (acc[item] || 0) + 1;
        return acc;
      }, {});


      const itemsArray = Object.entries(count)
      const result =  itemsArray.sort((a,b)=> b[1]-a[1])
      console.log(paras,"almost there")
      if(paras === "brandname"){

        dispatch(addBrandName(result[0][0]))
      }
      else if( paras === "subproducttype"){
        dispatch(addSubProductType(result[0][0]))
      }else{
        dispatch(addProductType(result[0][0]))
      }

  }

  useEffect(()=>{
    const performSearch = async () => {
      try {
        console.log(searchTerm, "updated searchTerm");
        setLoading(true);
        const data = await mutation.mutateAsync(searchTerm, {
          onSuccess: (data) => {
            console.log(data, "mutation term");
            setSearchProductData(data.data);
            GettheTopValues("brandname",data.data)
            GettheTopValues("subproducttype",data.data)
            GettheTopValues("producttype",data.data)
            console.log(data, "mutation term finished");
          },
          onError: (error) => {
            console.error('Error during mutation:', error);
          }
        });
         
      } catch (error) {
        console.error("Error handling search:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      performSearch();
    }
  },[searchTerm])

  // const refresh = () => window.location.reload(true)
  // const [data, setData] = useState(SearchProductData?.data)

  if(loading){
    return(
      <p>Loading..</p>
    )
  }
  console.log(SearchProductData, "hwllo data")

  return (
    <QueryClientProvider client={queryClient}>
    <Example  productdata={SearchProductData1}/>
  </QueryClientProvider>
  );
}

async function fetchProjects(page = 0,productData) {


  const perPage = 20;
  const startIndex = page * perPage;
  const endIndex = startIndex + perPage;
  
  const data = productData.slice(startIndex, endIndex);
  console.log(data,"After slice")
  return {
    projects: data,
    hasMore: endIndex < productData.length,
  };
}

function Example({productdata}) {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState(0);

  const searchTerm = useSelector((state)=> state.products.ProductData[0].searchTerm)
  console.log(productdata,"searchTerm")
 

  const mydata = productdata
  console.log(mydata,"mydata of the day")

  const { status, data, error, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['projects', page],
    queryFn: () => fetchProjects(page,mydata),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  React.useEffect(() => {
    if (!isPlaceholderData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ['projects', page + 1],
        queryFn: () => fetchProjects(page + 1,mydata),
      });
    }
  }, [data, isPlaceholderData, page, queryClient, mydata]);
  if(status === "success"){
  console.log(data.projects,"my data passed on the ways")
  }
  return (
    <div>
      {status === 'pending' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>Error: {error.message}</div>
      ) : (
        <Grid container spacing={{xs:5,md:3}} columnSpacing={{xs:10}}>
  {console.log(data,"my whole data")}
  {/* {data?.projects?.map((product) => (
    <Grid item xs={6}   md={3} key={product.productdetail.recno}>
      {product.productdetail && <ShopProductCard key={product.productdetail.recno} product={product.productdetail} />}
    </Grid>
  ))} */}
    {productdata?.map((product) => (
    <Grid item xs={6}   md={3} key={product.productdetail.recno}>
      {product.productdetail && <ShopProductCard key={product.productdetail.recno} product={product.productdetail} />}
    </Grid>
  ))}
</Grid>

      )}
      <Box sx={{
      display: "flex",
      justifyContent: "center",
      marginTop: "5%",
      position: "absolute",
      left: {md:"60%",xs:"50%"},
      transform: "translateX(-50%)", // Center horizontally
    }}>
      <IconButton
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
        sx={{
          bgcolor: "#F2F2F2",
          border: "1px solid gray",
          justifyContent: "center",
          alignItems: "center",
          mx: 2
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Typography sx={{ textAlign: "center", fontSize: 20 }}>
        {page + 1}
      </Typography>
      <IconButton
        onClick={() => {
          setPage((old) => (data?.hasMore ? old + 1 : old));
        }}
        disabled={isPlaceholderData || !data?.hasMore}
        sx={{
          bgcolor: "#F2F2F2",
          border: "1px solid gray",
          justifyContent: "center",
          alignItems: "center",
          mx: 2
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </Box>
    </div>
  );
}