import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codeExamples: null, // Будет хранить примеры API-запросов
  endpoint: "",
  method: "",
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setApiData: (state, action) => {
      state.codeExamples = action.payload.codeExamples;
      state.endpoint = action.payload.endpoint;
      state.method = action.payload.method;
    },
  },
});

export const { setApiData } = apiSlice.actions;
export default apiSlice.reducer;
