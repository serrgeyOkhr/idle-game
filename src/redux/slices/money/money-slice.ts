import { createSlice } from '@reduxjs/toolkit';
import { initialMoneyAmount } from '../states';

export const moneySlice = createSlice({
  name: 'money',
  initialState: initialMoneyAmount,
  reducers: {
    increaseMoney(state, action) {
      state.startMoney = state.startMoney + action.payload;
    },
    decreaseMoney(state, action) {
      if (state.startMoney - action.payload > 0) {
        state.startMoney = state.startMoney - action.payload;
      }
      else {
        throw new Error("Недостаточно денег"); 
      }
    },
    
  },
});

export const { 
  increaseMoney,
 } = moneySlice.actions;
export default moneySlice.reducer;
