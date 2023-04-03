import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    getSearch(state: any, action: any) {
      // state = action.payload;
      console.log(action.payload)
    },
  },
});

export const { getSearch } = searchSlice.actions;

export default searchSlice.reducer;
