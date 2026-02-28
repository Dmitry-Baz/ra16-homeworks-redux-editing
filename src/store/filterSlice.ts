import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { searchTerm: string } = {
  searchTerm: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    clearSearch(state) {
      state.searchTerm = "";
    },
  },
});

export const { setSearchTerm, clearSearch } = filterSlice.actions;
export default filterSlice.reducer;
