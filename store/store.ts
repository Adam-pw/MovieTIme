import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    serach: searchSlice,
  },
});

export default store;
