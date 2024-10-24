import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    username: "akash",
    dtoken: null,
  },
  addtocart: {
    cart: []
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
      const token = action.payload;
      console.log(token, "toekn", action.payload, "payloads");
      // Update the token
      state.userData.dtoken = token;
    },
    addTocart: (state, action) => {
        const product = action.payload;
        const existingProductIndex = state.addtocart.cart.findIndex(item => item.recno === product.recno);
      
        if (existingProductIndex !== -1) {
          // If the product already exists in the cart, update its count
          state.addtocart.cart[existingProductIndex].count = product.count;
        } else {
          // If the product doesn't exist, add it to the cart
          state.addtocart.cart.push(product);
        }
      }
      
  }
});

export const { addToken, addTocart } = userSlice.actions;
export default userSlice.reducer;
