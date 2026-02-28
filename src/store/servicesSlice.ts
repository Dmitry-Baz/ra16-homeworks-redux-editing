import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"; 
import type { Service } from "../types";

const initialState: { items: Service[] } = {
  items: [],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    addService(state, action: PayloadAction<Omit<Service, "id">>) {
      state.items.push({
        id: crypto.randomUUID ? crypto.randomUUID() : nanoid(8),
        ...action.payload,
      });
    },
    updateService(
      state,
      action: PayloadAction<{ id: string; name: string; price: number }>
    ) {
      const idx = state.items.findIndex((s) => s.id === action.payload.id);
      if (idx !== -1) {
        state.items[idx] = {
          ...state.items[idx],
          name: action.payload.name,
          price: action.payload.price,
        };
      }
    },
    deleteService(state, action: PayloadAction<string>) {
      state.items = state.items.filter((s) => s.id !== action.payload);
    },
  },
});

export const { addService, updateService, deleteService } =
  servicesSlice.actions;
export default servicesSlice.reducer;
