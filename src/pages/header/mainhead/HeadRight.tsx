import React from 'react';
import {PiUserCircleGearThin, PiHeartLight, PiShoppingCartSimpleLight} from'react-icons/pi'


function HeadRight() {
  return (
    <nav className='header_part_container'>
    <a className="header_actions" href="/protected">
      <PiUserCircleGearThin />
    </a>
    <a className="header_actions" href="#">
      <PiHeartLight />
    </a>
    <a className="header_actions" href="#">
      <PiShoppingCartSimpleLight />
    </a>
        </nav>
  )
}

export default HeadRight
