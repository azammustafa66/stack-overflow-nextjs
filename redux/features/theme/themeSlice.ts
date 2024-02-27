import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  mode: 'light' | 'dark';
};

const initialState = {
  mode: 'dark',
} satisfies ThemeState as ThemeState;

export const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
        document.documentElement.classList.add('dark');
      } else {
        state.mode = 'light';
        document.documentElement.classList.remove('dark');
      }
    },
  },
});

export const { toggle } = theme.actions;

export default theme.reducer;
