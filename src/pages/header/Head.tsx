import React from 'react';
import TopHead from './tophead/TopHead';
import MainHead from './mainhead/MainHead';
import './Head.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export default function Head() {
  const translation = useSelector((state: RootState)=>state.language.translation)
  return (
    <div className='container'>
      <TopHead language={translation.language} contacts={translation.contacts} />
      <MainHead />
    </div>
  )
}
