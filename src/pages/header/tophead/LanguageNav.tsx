import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../../app/store';
import { changeLanguage } from '../../../features/language/languageSlice';


export default function LanguageNav() {

    const language = useSelector((state: RootState)=>state.language.language);
    const translation = useSelector((state: RootState)=>state.language.translation)
    const dispatch = useDispatch();
  
  return (
    <ul className='header_lng'>
    <li 
    className={language === 'en' ? 'active' : ''}
    onClick={() => dispatch(changeLanguage('en'))}>{translation.components.language.en}</li>
    <li 
    className={language === 'ua' ? 'active' : ''}
    onClick={() => dispatch(changeLanguage('ua'))}>{translation.components.language.ua}</li>
  </ul>
  )
}
