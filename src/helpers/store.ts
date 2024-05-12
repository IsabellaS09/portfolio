import { configureStore } from "@reduxjs/toolkit";

import displayTechSlice from "./reducers";

export const store = configureStore({
  reducer: {
    displayTech: displayTechSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
