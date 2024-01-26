import { configureStore } from "@reduxjs/toolkit";
import { gitHubApi } from "./gitHubApi/gitHubApi";
import { setupListeners } from '@reduxjs/toolkit/query'
import {reducer } from "./githubSlice/githubSlice";


export const store = configureStore({
  reducer: {
    gitHub: reducer,
    [gitHubApi.reducerPath]: gitHubApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(gitHubApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>