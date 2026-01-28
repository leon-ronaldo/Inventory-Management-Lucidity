import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RoleState = {
  isAdmin: boolean;
};

const initialState: RoleState = {
  isAdmin: true
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setAdmin: (state) => {
      state.isAdmin = true;
    },
    setUser: (state) => {
      state.isAdmin = false;
    },
    setRole: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    }
  }
});

export const { setAdmin, setUser, setRole } = roleSlice.actions;

export default roleSlice.reducer;
