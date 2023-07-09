import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import registerReducer from "./registerSlice";

export const appStore = configureStore({
  reducer: {
    registerState: registerReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type AppState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppdSelector: TypedUseSelectorHook<AppState> = useSelector;
