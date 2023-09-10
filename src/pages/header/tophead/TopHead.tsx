import React from 'react';
import LanguageNav from './LanguageNav';
import Contacts from './Contacts';
import { LanguageData } from '../../../types';

interface TopHeadProps{
  language: any,
  contacts: string
}


const TopHead:React.FC<TopHeadProps>=({language, contacts})=> {
  return (
    <div className='header_line'>
      <LanguageNav />
      <Contacts />
    </div>
  )
}


export default TopHead;