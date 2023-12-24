import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import infoSlice from "./infoSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videoSlice,
    info: infoSlice,
  },
});

export default store;
