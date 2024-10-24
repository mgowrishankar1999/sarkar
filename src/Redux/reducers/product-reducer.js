import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ProductData: [
        {
            products:[],
            subProductType:"",
            brandname:"",
            searchTerm:"",
            producttype:"",
            dtoken:null
        }
    ]
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductData: (state, action) =>  {

     const  productData  = action.payload
    // Create a new userData object with the updated token
    const updatedProductsData = {
        ...state,
        ProductData: [
            {
                ...state.ProductData[0],
                products: productData
            }
        ]
    };
    return updatedProductsData;
    },
    addSubProductType : (state, action) => {
        const subProductType = action.payload

        const updatedProductsData = {
            ...state,
            ProductData: [
                {
                    ...state.ProductData[0],
                    subProductType:subProductType
                }
            ]
        } 
        return updatedProductsData;
    },
    addBrandName : (state, action) => {
        const brandname = action.payload
        const updatedProductsData = {
            ...state,
            ProductData: [
                {
                    ...state.ProductData[0],
                    brandname:brandname
                }
            ]
        }
        return updatedProductsData;
    },
    addProductType : (state, action) => {
        const producttype = action.payload
        const updatedProductsData = {
            ...state,
            ProductData: [
                {
                    ...state.ProductData[0],
                    producttype:producttype
                }
            ]
        }
        return updatedProductsData;        
    },
    addSearchTerm : (state, action) => {
        const searchTerm = action.payload
        const updatedProductsData = {
            ...state,
            ProductData: [
                {
                    ...state.ProductData[0],
                    searchTerm:searchTerm
                }
            ]
        } 
        return updatedProductsData; 
    }
  }
})

// or we could set our initial state to an object like this
// const initailState = {
 // post: [],
 // anotherstate: '', 
//}
// in the reducers we would update this by saying //state.post.push(action.payload) instead

export const {addProductData, addProductType, addBrandName, addSubProductType,addSearchTerm} = productSlice.actions
export default productSlice.reducer   