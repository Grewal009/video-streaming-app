import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    video: null,
  },
  reducers: {
    addVideos: (state, action) => {
      if (state.video == null) {
        state.video = action.payload;
      } else {
        console.log("state.video.length: ", state.video.length);

        if (state.video.length >= 100) {
          state.video = state.video.slice(0, 49);
        }
        state.video.push(...action.payload);
      }
    },
  },
});

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;
