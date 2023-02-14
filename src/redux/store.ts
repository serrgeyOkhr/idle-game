import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import moneySlice from './slices/money/money-slice';
import scoreSlice from './slices/score/score-slice';
import shopSlice from './slices/shop/shop-slice';
// import searchReducer from './slices/search/search-slice';

export function makeStore() {
  return configureStore({
    reducer: {
      score: scoreSlice,
      money: moneySlice,
      shop: shopSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([]),
  });
}

const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
export { useAppDispatch, useAppSelector };
