import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { grey } from '@mui/material/colors';
import { SearchProduct } from '../../api/getapi/getapis';
import { useQuery } from 'react-query';
import { addProductData } from '../../Redux/reducers/product-reducer';
import { useSelector,useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBrandName,addProductType,addSubProductType, addSearchTerm } from '../../Redux/reducers/product-reducer';
import { useMutation } from 'react-query';





export default function SearchBar() {
  const [searchParams,setsearchParams] = useState("")
  const navigate = useNavigate();

  const productData = useSelector((state) => state.products.ProductData)
  const mutation = useMutation((searchParams) => SearchProduct(searchParams));
  const dispatch = useDispatch()
  console.log(productData,"hello data")
  
  const { isLoading: isLoadingSearchProduct, isError: isErrorSearchProduct, data: SearchProductData, error: SearchProductError } = mutation;
  const refresh = () => window.location.reload(true)
  if(!isLoadingSearchProduct){
    console.log(SearchProductData,"searchproductdata")
  }

  const GettheTopValues = (paras) => {
    const finalProduct = []
      SearchProductData.data.forEach((e) => {
        console.log(e.productdetail)
        const matchingProducts = Object.keys(e.productdetail[0]).filter((product) => {
          if(product === paras){
            console.log(e.productdetail[0][product],"eleectr")
            return e.productdetail[0][product]
          }
        } );
console.log(e.productdetail[0][matchingProducts],"matchingProducts")
        finalProduct.push(e.productdetail[0][matchingProducts]);  // Spread operator to add individual elements
      });
      console.log(finalProduct,"myfinalproduct")

        const count = finalProduct.reduce((acc, item) => {
        // Split the item to handle the category (before ".") and potentially a number (after ".")
        console.log(item)
        // Initialize a count for the category if it doesn't exist in the accumulator
        acc[item] = (acc[item] || 0) + 1;
        return acc;
      }, {});


      console.log(count, "my count")
      const itemsArray = Object.entries(count)
      const result =  itemsArray.sort((a,b)=> b[1]-a[1])
      console.log(result,"my re", result[0][0])
      if(paras === "brandname"){

        dispatch(addBrandName(result[0][0]))
      }
      else if( paras === "subproducttype"){
        dispatch(addSubProductType(result[0][0]))
      }else{
        dispatch(addProductType(result[0][0]))
      }

  }

  const handleKeyDown = async(event) => {
    if (event.key === "Enter") {
      // Trigger your function here
      // console.log(SearchProductData.data, "mew data")
      // const finalProduct = []
      // console.log(searchParams)
      // await mutation.mutate(searchParams);
      // await Promise.all([
      //   GettheTopValues("brandname"),
      //   GettheTopValues("subproducttype"),
      //   GettheTopValues("producttype"),
      // ]);
      dispatch(addSearchTerm(searchParams))
      //dispatch(addProductData(SearchProductData.data))
      navigate('/shop')
     

     
    }
  };



  return (
  

       <TextField
        
        label=""
        placeholder='Search for products, categories or brands..'
        sx={{
            backgroundColor: '#F6F5FF',
            borderRadius: 4,
            width:"100%",
         "& .MuiOutlinedInput-root": {
            // border: "1px solid yellow",
            borderRadius: 8,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #fff",
            borderRadius:4
            
        }
           
        }}
       onKeyDown={handleKeyDown}
        onChange={(e)=> setsearchParams(e.target.value)}

       
      />
  )
}
