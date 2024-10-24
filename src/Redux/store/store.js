import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user-reducer'
import productReducer from '../reducers/product-reducer'
//note that my reducer here is imported from a folder called reducer. depending on how you set up your file structure this could be different for you.

const store = configureStore({
  reducer: {
    userData: userReducer,
    products: productReducer
  },
})

export default store