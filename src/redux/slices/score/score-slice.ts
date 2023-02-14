import { createSlice } from '@reduxjs/toolkit';
import { initialStateScore } from '../states';

export const scoreSlice = createSlice({
  name: 'score',
  initialState: initialStateScore,
  reducers: {
    increaseScore(state, action) {
      state.startScore = state.startScore + action.payload;
    },
  },
});

export const { 
  increaseScore,
 } = scoreSlice.actions;
export default scoreSlice.reducer;
