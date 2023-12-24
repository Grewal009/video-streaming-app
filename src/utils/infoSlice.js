import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    vinfo: null,
  },
  reducers: {
    addInfo: (state, action) => {
      state.vinfo = action.payload;
    },
  },
});

export const { addInfo } = infoSlice.actions;
export default infoSlice.reducer;
