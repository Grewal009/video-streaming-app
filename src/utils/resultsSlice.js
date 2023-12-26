import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "res",
  initialState: {
    result: null,
  },
  reducers: {
    addResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { addResult } = resultsSlice.actions;
export default resultsSlice.reducer;
