import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const keyLS = 'githb'

  interface States {
    favorite: string[]
  }

  const initialState: States = {
    favorite: JSON.parse(localStorage.getItem(keyLS) ?? '[]')
  }

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers:{
    addFavorite: (state, {payload}: PayloadAction<string>) => {
      state.favorite.push(payload)
      localStorage.setItem(keyLS, JSON.stringify(state.favorite))
    },
    RemoveFavorite: (state, {payload}: PayloadAction<string>) => {
      state.favorite = state.favorite.filter(el => el !== payload)
      localStorage.setItem(keyLS, JSON.stringify(state.favorite))
    }
  }
})

export const {actions,reducer} = githubSlice