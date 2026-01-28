/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Product } from "../types/product";

const API_URL = import.meta.env.VITE_API_URL;

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null
};


export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, { rejectWithValue }) => {

    const toastId = toast.loading("Loading products...");

    try {
      const res = await fetch(`${API_URL}/api/products`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Products loaded", { id: toastId });

      return data;

    } catch (err: any) {

      toast.error(err.message || "Failed to load products", {
        id: toastId
      });

      return rejectWithValue(err.message);
    }
  }
);


export const createProduct = createAsyncThunk(
  "products/create",
  async (product: Omit<Product, "id">, { rejectWithValue }) => {

    const toastId = toast.loading("Creating product...");

    try {
      const res = await fetch(`${API_URL}/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Product created", { id: toastId });

      return data;

    } catch (err: any) {

      toast.error(err.message || "Create failed", {
        id: toastId
      });

      return rejectWithValue(err.message);
    }
  }
);


export const updateProduct = createAsyncThunk(
  "products/update",
  async (
    { _id, updates }: { _id: string; updates: Partial<Product> },
    { rejectWithValue }
  ) => {

    const toastId = toast.loading("Updating product...");

    try {
      const res = await fetch(`${API_URL}/api/products/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Product updated", { id: toastId });

      return data;

    } catch (err: any) {

      toast.error(err.message || "Update failed", {
        id: toastId
      });

      return rejectWithValue(err.message);
    }
  }
);


export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (_id: string, { rejectWithValue }) => {

    const toastId = toast.loading("Deleting product...");

    try {
      const res = await fetch(`${API_URL}/api/products/${_id}`, {
        method: "DELETE"
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message);
      }

      toast.success("Product deleted", { id: toastId });

      return _id;

    } catch (err: any) {

      toast.error(err.message || "Delete failed", {
        id: toastId
      });

      return rejectWithValue(err.message);
    }
  }
);


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.unshift(action.payload);
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          p => p._id === action.payload._id
        );

        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          p => p._id !== action.payload
        );
      });
  }
});

export default productSlice.reducer;
