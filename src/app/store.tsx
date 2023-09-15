import { configureStore } from '@reduxjs/toolkit';
import LanguageReducer from '../features/language/languageSlice';
import CartReducer from '../features/language/cartSlice'

const store = configureStore({
  reducer: {
    language: LanguageReducer,
    cart: CartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
