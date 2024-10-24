import { handleApiResponse } from "../../utils/apiUtils";
import { instance } from "../config/axiosConfig";

// api.js
// 2. Banners -/banners (GET) 
// 3. categories - /homeCategories (GET)
// 4. Categorywise Products - /homeProduct/:offset (GET)
// 5. Fast Moving Products - /fast-moving-product (GET)
// 6. Recent Product - /recent-product (GET)
// 7. Popular brand in Home - /get-popular-brand-in-home (GET)
// 8. All Brand - /get-popular-brand (GET)
// 9. Search Product - /search-product?productName=soup&offset=0 (GET)
// 10. All Subcategory - /all-subcategory?producttype=category(GET)

export const topdealprod = async () => {
   try{ const response = await instance.get('/topdealProducts');
   const data = handleApiResponse(response)
    return data;
}
    catch (error) {
        console.error('Error fetching /topdealProducts api:', error);
        throw error;      
      }
  };

  export const banners = async () => {
    try{ const response = await instance.get('/banners');

    const data = handleApiResponse(response)
    return data;
 }
     catch (error) {
        console.error('Error fetching /banners api:', error);
        throw error;          }
   };

   export const homeCategories = async () => {
    try{ const response = await instance.get('/homeCategories');
    const data = handleApiResponse(response)
    return data;
 }
     catch (error) {
        console.error('Error fetching /homeCategories api:', error);
        throw error; 
       }
   };

   export const CatwiseProd = async (offset) => {
    try{ const response = await instance.get(`/homeProduct/${offset}`);
    console.log("catwise",response.data)
     return response.data;
 }
     catch (error) {
        console.error('Error fetching /homeProduct api:', error);
        throw error; 
       }
   };

   export const fastmovingprod = async () => {
    try{ const response = await instance.get('/fast-moving-product');
    const data = handleApiResponse(response)
    return data;
 }
     catch (error) {
        console.error('Error fetching /fast-moving-product api:', error);
        throw error; 
       }
   };

   export const recentprod = async () => {
    try{ const response = await instance.get('/recent-product');
    const data = handleApiResponse(response)
    return data;
 }
     catch (error) {
        console.error('Error fetching /recentproducts api:', error);
        throw error; 
       }
   };

   export const Popbrandhome = async () => {
    try{ const response = await instance.get('/get-popular-brand-in-home');
    const data = handleApiResponse(response)
    return data;
 }
     catch (error) {
        console.error('Error fetching /get-popular-brand-in-home api:', error);
        throw error; 
       }
   };

   export const AllBrand = async () => {
    try{ const response = await instance.get('/get-popular-brand');
    const data = handleApiResponse(response)
    return data;
 }
     catch (error) {
        console.error('Error fetching /get-popular-brand api:', error);
        throw error; 
       }
   };

   export const SearchProduct = async (product) => {
    try{ const response = await instance.get(`/search-product?productName=${product}&offset=0`);
    const data = handleApiResponse(response)
    
    return data;
 }
     catch (error) {
        console.error('Error fetching /search-product?productName api:', error);
        throw error; 
       }
   };

   export const AllSubcategory = async () => {
    try{ const response = await instance.get('/all-subcategory?producttype=category');
    const data = handleApiResponse(response)
    return data;
 }
     catch (error) {
        console.error('Error fetching /all-subcategory?producttype=category api:', error);
        throw error; 
       }
   };

   export const AllCoupen = async () => {
    try{ const response = await instance.get('/all-coupen');
    const data = handleApiResponse(response)
    return data;
 }
     catch (error) {
        console.error('Error fetching /all-coupen api:', error);
        throw error; 
       }
   };

   export const getCoupen = async (amt) => {
    try{ const response = await instance.get(`/get-coupen?amount=${amt}`);
    const data = handleApiResponse(response)
    return data;
 }
     catch (error) {
        console.error('Error fetching /all-coupen api:', error);
        throw error; 
       }
   };


   export const getAddress = async ({queryKey}) => {
    const [_, ad1, ad2, ad3, mno, pin, city, email, nam, token] = queryKey;
    console.log("me",)
    console.log("change",queryKey)
    try{ const response = await instance.get(`/address?m_adr1=${ad1}&m_adr2=${ad2}&m_adr3=${ad3}&m_mobno=${mno}&pincode=${pin}&city=${city}&email=${email}&name=${nam}`,{
        headers:{
            token:`${token}`
        }
    });
    const data = handleApiResponse(response)
    return data;
 }
     catch (error) {
        console.error('Error fetching /address api:', error);
        throw error; 
       }
   };

   export const cancelOrder = async (orderId, date,token) => {
    try {
        const response = await instance.get(`/canceltheOrder?orderId=${orderId}&date=${date}`, {
            headers: `${token}` 
        });
        const data = handleApiResponse(response);
        return data;
    } catch (error) {
        console.error('Error fetching /canceltheOrder API:', error);
        throw error;
    }
};

export const Reorder = async (precno,token) => {
    try {
        const response = await instance.get(`/re-order?productRecno=${precno}`, {
            headers: `${token}` 
        });
        const data = handleApiResponse(response);
        return data;
    } catch (error) {
        console.error('Error fetching /canceltheOrder API:', error);
        throw error;
    }
};

export const Bestproduct = async (bname) => {
    try {
        const response = await instance.get(`/bestSellingProduct?offset=0&brandname=${bname}`);
        const data = handleApiResponse(response);
        return data;
    } catch (error) {
        console.error('Error fetching /canceltheOrder API:', error);
        throw error;
    }
};

export const Area = async () => {
    try{ const response = await instance.get('/area');
    const data = handleApiResponse(response)
    return data;
 }
     catch (error) {
        console.error('Error fetching /area api:', error);
        throw error; 
       }
   };

   export const order = async (body) => {
    try {
        const response = await instance.post(`/order`,body,{
            headers:{
                token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjczMDUyODE5MDQiLCJpYXQiOjE3MTU4NzY2NjV9.-AKRk88knQDfzEvvVlzrXwQE7y70VHv8x-tJAFxTQgY'
            }});
        const data = handleApiResponse(response);
        return data;
    } catch (error) {
        console.error('Error fetching /canceltheOrder API:', error);
        throw error;
    }
};