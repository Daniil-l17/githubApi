import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Irepo } from '../../types/type';

const keys = 'githubMainApi';

interface States {
  favorite: Irepo[];
}
const initialState: States = {
  favorite: JSON.parse(localStorage.getItem(keys) ?? '[]'),
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<Irepo>) => {
      const isExsict = state.favorite.some(el => el.id === payload.id);
      if (isExsict) {
        state.favorite = state.favorite.filter(el => el.id !== payload.id);
        localStorage.setItem(keys, JSON.stringify(state.favorite));
      } else {
        state.favorite.push(payload);
        localStorage.setItem(keys, JSON.stringify(state.favorite));
      }
    },
  },
});

export const { actions, reducer } = githubSlice;
