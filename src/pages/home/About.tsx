import React from 'react';
import ImgAbout from '../../img/image.png'

type AboutProps = {
    data: any;
};

const About:React.FC<AboutProps> = ({data}) => {
    
    return <div className='banner_wrapper' id='about'>
       <img src={ImgAbout} alt="img about section" width={`60%`} height={`100%`}/>
       <div className="banner_description">
       <h1>{data.title}</h1>
       <p>{data.description}</p>
       </div>
        </div>
}
export default About;