// src/store/formSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { FormState } from "../types";

const initialState: FormState = {
  name: "",
  price: "",
  editingId: null,
  errors: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormField(
      state,
      action: PayloadAction<{ field: "name" | "price"; value: string }>
    ) {
      const { field, value } = action.payload;
      state[field] = value;
      if (state.errors[field]) {
        delete state.errors[field];
      }
    },
    startEditing(
      state,
      action: PayloadAction<{ id: string; name: string; price: number }>
    ) {
      state.editingId = action.payload.id;
      state.name = action.payload.name;
      state.price = String(action.payload.price);
      state.errors = {};
    },
    cancelEditing(state) {
      state.editingId = null;
      state.name = "";
      state.price = "";
      state.errors = {};
    },
    clearForm(state) {
      state.name = "";
      state.price = "";
      state.editingId = null;
      state.errors = {};
    },
    setValidationError(
      state,
      action: PayloadAction<{ field: keyof FormState["errors"]; error: string }>
    ) {
      state.errors[action.payload.field] = action.payload.error;
    },
    clearValidationError(
      state,
      action: PayloadAction<keyof FormState["errors"]>
    ) {
      delete state.errors[action.payload];
    },
  },
});

export const {
  setFormField,
  startEditing,
  cancelEditing,
  clearForm,
  setValidationError,
  clearValidationError,
} = formSlice.actions;
export default formSlice.reducer;
