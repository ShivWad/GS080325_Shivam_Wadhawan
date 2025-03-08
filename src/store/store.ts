import { configureStore } from '@reduxjs/toolkit'
import globalSlice from './globalSlice'
export const store = configureStore({
  reducer: {
    globalSlice:globalSlice
  }
});
export type IRootState = ReturnType<typeof store.getState>