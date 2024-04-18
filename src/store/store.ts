import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { isLocal } from "@/constatnt/env";
import globalReducer from "@/state/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  devTools: isLocal,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
