import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import toggleBurgerSlice from "./toggleBurgerSlice";
const store = configureStore({
  reducer: {
    api: apiSlice,
    toggleBurgerSlice,
  },
});

export default store;
