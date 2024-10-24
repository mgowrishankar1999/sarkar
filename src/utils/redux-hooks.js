import { useSelector } from "react-redux";

const useBrandname = () => useSelector(state => state.products.ProductData[0].brandname);

const useProductType = () => useSelector(state => state.products.ProductData[0].producttype)
const useSubProductType = () => useSelector(state => state.products.ProductData[0].subProductType)

export {useBrandname, useProductType, useSubProductType}