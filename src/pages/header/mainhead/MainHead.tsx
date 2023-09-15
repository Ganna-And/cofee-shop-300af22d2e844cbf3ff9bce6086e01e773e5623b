import React from 'react';
import Logo from '../../../img/—Pngtree—coffee logo_5898135 1.png'
import HeadLeft from './HeadLeft';
import HeadRight from './HeadRight';
import { useNavigate } from 'react-router-dom';


export default function MainHead() {

  const navigate = useNavigate()
  return (
    <div className='head_wrapper' >
      <HeadLeft />
<img className ='nav_logo' src={Logo} alt="logo" onClick={()=> navigate('/')} />
      <HeadRight />
    </div>
  )
}
