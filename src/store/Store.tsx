import { configureStore } from '@reduxjs/toolkit'
import { animeSlice } from './slices/Anime/AnimeSlice'

export const store = configureStore({
  reducer: {
    anime: animeSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
