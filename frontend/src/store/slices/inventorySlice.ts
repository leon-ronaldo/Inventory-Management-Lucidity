import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Product } from "../../types/product";

interface InventoryState {
  products: Product[];
}

const initialState: InventoryState = {
  products: []
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        p => p._id !== action.payload
      );
    },

    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(
        p => p._id === action.payload._id
      );

      if (index !== -1) {
        state.products[index] = action.payload;
      }
    }
  }
});

export const {
  addProduct,
  removeProduct,
  updateProduct
} = inventorySlice.actions;

export default inventorySlice.reducer;
