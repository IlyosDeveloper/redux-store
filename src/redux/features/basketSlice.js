import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../Data";

const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment: ( state, action ) =>
    {
      const item = state.products.find( item => item.name === action.payload )
      item.amount += 1
      state.amount += 1;
    },
    decrement: ( state, action ) =>
    {
      const item = state.products.find((item) => item.name === action.payload);
      item.amount -= 1
      state.amount -= 1;
    },
    removeOne: (state, action) => {
      state.products = state.products.filter((product) => {
        if (product.name != action.payload) {
          return product;
        }
      });
    },
  },
});

export const { increment, decrement, removeOne } = basketSlice.actions;
export default basketSlice.reducer;
