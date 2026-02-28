import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./servicesSlice";
import formReducer from "./formSlice";
import filterReducer from "./filterSlice"; // ← добавлено

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    form: formReducer,
    filter: filterReducer, // ← добавлено
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
