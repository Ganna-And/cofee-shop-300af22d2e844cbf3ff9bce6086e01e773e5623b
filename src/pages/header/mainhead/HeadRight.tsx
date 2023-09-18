import React from 'react';
import {PiUserCircleGearThin, PiHeartLight, PiShoppingCartSimpleLight} from'react-icons/pi'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../../features/language/cartSlice';


function HeadRight() {
const navigate = useNavigate();
const productsAdded = useSelector(selectCartItems);



  return (
    <ul className='header_part_container'>
    <li className="header_actions" onClick={()=> navigate('/signIn')}>
      <PiUserCircleGearThin  size={32} className='relatve'/>
    </li>
    <li className="header_actions" onClick={()=> navigate('/cart')}>
      <PiHeartLight size={32} />
      
    </li>
    <li className="header_actions" onClick={()=> navigate('/cart')} >
      <PiShoppingCartSimpleLight size={32} /><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {productsAdded.length}
  </span>
    </li>
        </ul>
  )
}

export default HeadRight
