import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import roleReducer from './slices/roleSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    role: roleReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
