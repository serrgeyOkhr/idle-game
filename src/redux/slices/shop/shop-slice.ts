import { createSlice } from '@reduxjs/toolkit';
import { initialShopState } from '../states';

export const shopSlice = createSlice({
  name: 'money',
  initialState: initialShopState,
  reducers: {
    increaseMoney(state, action) {
      state.startMoney = state.startMoney + action.payload;
    },
    
  },
});

export const { 
  increaseMoney,
 } = shopSlice.actions;
export default shopSlice.reducer;
