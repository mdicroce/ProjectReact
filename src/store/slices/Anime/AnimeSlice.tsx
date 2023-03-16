import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type DataItem } from '../../../routes/home'
import { type AnimeDetails } from '../../../routes/Detail'

export interface AnimeState {
  animes: DataItem[] | undefined
  animeDetail: AnimeDetails | undefined
  page: number
  loading: boolean
}

const initialState: AnimeState = {
  animes: undefined,
  animeDetail: undefined,
  page: 0,
  loading: false
}

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true
    },
    setAnimes: (state, action: PayloadAction<DataItem[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = false
      state.animes = action.payload
    },
    setAnimeDetail: (state, action: PayloadAction<AnimeDetails>) => {
      state.loading = false
      state.animeDetail = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { startLoading, setAnimes, setAnimeDetail } = animeSlice.actions
