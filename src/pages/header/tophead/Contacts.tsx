import React from 'react';
import {useSelector} from 'react-redux';
import { RootState } from '../../../app/store';


function Contacts() {
   
    const translation = useSelector((state: RootState)=>state.language.translation)

  return (
    <a href='#contacts'>
     {translation.components.contacts}
    </a>
  )
}

export default Contacts
