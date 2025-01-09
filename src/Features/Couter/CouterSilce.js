import { createSlice } from '@reduxjs/toolkit';

const counterSline = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSline;

export const { increase, decrease } = actions;

export default reducer;
