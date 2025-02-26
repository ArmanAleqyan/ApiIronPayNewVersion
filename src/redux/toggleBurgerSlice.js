import { createSlice } from "@reduxjs/toolkit";

const toggleBurgerSlice = createSlice({
  initialState: {
    isOpenAside: false,
  },
  name: "burger",
  reducers: {
    setToggleBurger: (state, { payload }) => {
      state.isOpenAside = payload;
    },
  },
});
export default toggleBurgerSlice.reducer;
export const { setToggleBurger } = toggleBurgerSlice.actions;
