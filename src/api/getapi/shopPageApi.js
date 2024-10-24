
import { handleApiResponse } from "../../utils/apiUtils";
import { instance } from "../config/axiosConfig";

//SHOP PAGE API 's

/**
 * METHOD : GET
 * unknown
 * ENDPOINT : /get-filter-category?subProductType=&brandname= 
 */

const GetAllCategoryFilter = async(body) => {
    try {
        console.log(body,"all filter body")
        const response = await instance.get(`/get-filter-category?subProductType=${body.subproductType}&brandname=${body.brandname}`)
        const data = await handleApiResponse(response);
        return data
    } catch (error) {
        console.error('Error fetching /get-filter-category?subProductType=',error)        
        throw error
    }
}

/**
 * METHOD: GET
 * unknown
 * ENDPOINT :  /all-subcategory?producttype=&brandName=
 */


const GetSubCategory = async(body) => {
    try {
        console.log(body,"GetSubCategory")
        const response = await instance.get(`/all-subcategory?producttype=${body.productType}&brandName=${body.brandname}`)
        const data = await handleApiResponse(response);
        return data
    } catch (error) {
        console.error("Error in /all-subcategory?producttype=&brandName=", error)        
    }
}

/**
 * METHOD : GET
 * unknown
 * ENDPOINT : /all-brands?producttype=&subProductType=
 */

const GetProductType = async(body) => {
    try {
        const response = await instance.get(`/all-brands?producttype=${body.productType}&subProductType=${body.subProductType}`)
        const data = await handleApiResponse(response);
        return data
    } catch (error) {
        console.error("Error in /all-subcategory?producttype=&brandName=", error)        
    }
}

/**
 * METHOD : GET
 * unknown
 * ENDPOINT : /filter-recent-product?offset=0&brandname=
 */

const GetFilterRecentProduct = async (body) => {
    try {
        const response = await instance.get(`/filter-recent-product?offset=${body.offset}&brandname=${body.brandname}`)
        const data = await handleApiResponse(response);
        return data
    } catch (error) {
        console.error(" Eroor in /filter-recent-product?offset=0&brandname=", error)        
    }
}

/**
 * METHOD : GET
 * unknown
 * ENDPOINT : /bestSellingProduct?offset=0&brandname=
 */

const GetBestSellingProduct = async (body) => {
    try {
        const response = await instance.get(`/bestSellingProduct?offset=${body.offset}&brandname=${body.brandname}`)
        const data = await handleApiResponse(response);
        return data
    } catch (error) {
        console.error(" Eroor in /bestSellingProduct?offset=0&brandname=", error)        
    }
}

/**
 * METHOD : GET
 * unknown
 * ENDPOINT :  /products/category/:id/:subproducttype/:subproducttype2/:offset/:brand/:size/:color

 */

const GetTheFilterProduct = async (body) => {
    try {
        const response = await instance.get(`/products/category/:id/:subproducttype/:subproducttype2/:offset/:brand/:size/:color`)
        const data = await handleApiResponse(response);
        return data
    } catch (error) {
        console.error(" Eroor in /bestSellingProduct?offset=0&brandname=", error)        
    }
}


export {GetAllCategoryFilter, GetBestSellingProduct, GetFilterRecentProduct, GetSubCategory, GetProductType}