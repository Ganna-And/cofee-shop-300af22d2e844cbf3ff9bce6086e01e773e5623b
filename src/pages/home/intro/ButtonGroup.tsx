import React from 'react';
import { scrollToSection } from '../../../helperFunctions/scroll';


interface ButtonGroupProps {
    data:[]
};

const ButtonGroup:React.FC<ButtonGroupProps> = ({data}) => {
    
    return <div className='intro_btn_group'>
        {data.map((btn)=>(
            <button key={btn} className='btn_intro' onClick={()=>scrollToSection('#menu')}>{btn}</button>
        ))}
    </div>
}
export default ButtonGroup;
