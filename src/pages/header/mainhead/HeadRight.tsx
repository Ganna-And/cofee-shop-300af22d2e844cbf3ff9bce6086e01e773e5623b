import React from 'react';
import {PiUserCircleGearThin, PiHeartLight, PiShoppingCartSimpleLight} from'react-icons/pi'
import { useNavigate } from 'react-router-dom';


function HeadRight() {
const navigate = useNavigate()


  return (
    <ul className='header_part_container'>
    <li className="header_actions" onClick={()=> navigate('/signIn')}>
      <PiUserCircleGearThin  size={32}/>
    </li>
    <li className="header_actions" onClick={()=> navigate('/cart')}>
      <PiHeartLight size={32} />
    </li>
    <li className="header_actions" onClick={()=> navigate('/cart')} >
      <PiShoppingCartSimpleLight size={32} />
    </li>
        </ul>
  )
}

export default HeadRight
