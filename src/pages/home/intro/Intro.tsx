import React from 'react'
import { useTranslations } from '../../../hooks/useData';
import ButtonGroup from './ButtonGroup';


function Intro() {
    const {translations} = useTranslations();
    const intro = translations.components.intro

   
  return (
    <section  id='intro'>
       <div className='intro_description'>
        <h1>{intro.title}</h1>
        <p>{intro.description}</p>
        <ButtonGroup data={intro.buttons}/>
       </div>
       
    </section>
  )
}

export default Intro
