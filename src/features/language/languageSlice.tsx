
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import enTranslations from '../../data/en.json';
import uaTranslations from '../../data/ua.json';

interface LanguageState {
  language: string;
  translation: any;
}

const initialState:LanguageState={
    language: 'en',
    translation:enTranslations,
}



const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      state.translation = action.payload==='ua' ? uaTranslations : enTranslations

    },
  },
});


export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
