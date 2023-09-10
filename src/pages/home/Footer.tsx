import React from 'react';
import LogoText from '../../img/logo (1).png'
import {PiInstagramLogoThin, PiFacebookLogoThin, PiTwitchLogoThin} from'react-icons/pi'

type FooterProps = {
    
};

const Footer:React.FC<FooterProps> = () => {
    
    return (
    <footer id='contacts'>
        <img src={LogoText} alt="footer logo" />
     <div className="contact-info">
    <h3>Contact Us</h3>
    <p>
      <strong>Address:</strong> 123 Coffee Street, Cityville, Country
    </p>
    <p>
      <strong>Email:</strong> contact@coffeeshop.com
    </p>
    <p>
      <strong>Phone:</strong> +1 (123) 456-7890
    </p>
  </div>
  <div className="social-media">
  
    <h3 style={{marginLeft:'1rem'}}>Follow Us</h3>
    <ul >
      <li>
        <a href="https://www.facebook.com"><PiFacebookLogoThin  size={32}/></a>
      </li>
      <li>
        <a href="https://www.twitter.com"><PiTwitchLogoThin size={32}/></a>
      </li>
      <li>
        <a href="https://www.instagram.com"><PiInstagramLogoThin size={32}/></a>
      </li>
    </ul>
  </div>
</footer>
);
}

export default Footer;