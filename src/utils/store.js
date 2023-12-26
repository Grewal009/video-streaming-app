import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import infoSlice from "./infoSlice";
import searchSlice from "./searchSlice";
import resultsSlice from "./resultsSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videoSlice,
    info: infoSlice,
    search: searchSlice,
    res: resultsSlice,
  },
});

export default store;
