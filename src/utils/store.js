import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import infoSlice from "./infoSlice";
import searchSlice from "./searchSlice";
import resultsSlice from "./resultsSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videoSlice,
    info: infoSlice,
    search: searchSlice,
    res: resultsSlice,
    chat: chatSlice,
  },
});

export default store;
