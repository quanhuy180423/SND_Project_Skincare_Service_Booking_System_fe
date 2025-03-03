import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  tokens: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("login reducer payload:", action.payload);
      return {
        user: action.payload.user, 
        tokens: action.payload.tokens,
      };
    },
    logout: () => ({
      user: null,
      tokens: null,
    }),
  },
});

const { login, logout } = authSlice.actions;
export { login, logout };

// Export selector để lấy user từ state
export const selectUser = (state) => state.auth.user;
// Export selector để lấy tokens từ state
export const selectTokens = (state) => state.auth.tokens;

export default authSlice.reducer;
