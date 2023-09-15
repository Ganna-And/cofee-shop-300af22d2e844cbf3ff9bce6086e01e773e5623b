import React from 'react';
import './AuthPage.css';
import {HiHashtag} from'react-icons/hi2'
import { Link } from 'react-router-dom';
import {PiGoogleLogoBold} from'react-icons/pi';
import {BsTwitter, BsLinkedin} from 'react-icons/bs';
import SignInForm from './SignInFor';
import { AuthPageContent } from '../../types';



interface AuthPageProps {
    content: AuthPageContent
};

const AuthPage:React.FC<AuthPageProps> = ({content}) => {
    
    return <div className='container_auth' style={{display:'flex'}}>
        <div className='auth_google' >
            <img src="img/logo (1).png" height={32}  alt="logo with text" className='logo_signIn'/>
            <h1>{content.welcomeMessage}</h1>
            <p>{content.welcomeDescription}</p>
       <div style={{margin:'1rem'}}>
       <span className='social_gold s_hesh'><BsTwitter/></span>
       <span className='s_hesh'><PiGoogleLogoBold color='#C7A17A'/></span>
       <span className='social_gold s_hesh'><BsLinkedin/></span></div> 
       <div><SignInForm /></div> 
       </div>
       <div className='auth_banner'>
        <div className='auth_banner_container'>
        <div className="celebrate">
            <h2>{content.celebrateTitle}</h2>
            <p>{content.promoMessage}</p>
            <Link to='/' style={{margin:0}}><button>{content.startNowButton}</button></Link>
        </div>
        <img src="img/logo (1).png" alt="logo with text" height={34} className='logo_on_banner'/>
        <div className='hashtags_info'>
         <h3>{content.familyTitle}</h3>
         <p>{content.familyDescription}</p>
       <ul className="intro_btn_group">
  <li className='hesh_li btn_intro'>
  <span className='s_hesh'><HiHashtag /></span>
    <span>Mug_Life</span>
  </li>
  <li className='hesh_li btn_intro'>
    <span className='s_hesh'><HiHashtag width={24} /></span>
    <span>sip_repeate</span>
  </li>
  <li className='hesh_li btn_intro'>
    <span className='s_hesh'><HiHashtag /></span>
    <span>PerkUp</span>
  </li>
  <li className='hesh_li btn_intro'>
    <span className='s_hesh'><HiHashtag /></span>
    <span>coffeeBliss</span>
  </li>
</ul>
</div>
    </div>
       </div>
      
        </div>
}
export default AuthPage;