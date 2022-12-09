import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';


const SocialMedia = () => (
  <div className="app__social">
    <div className='cursor-pointer' 
    onClick={() => {
      // open twitter in new page
      window.open('https://twitter.com/spotmies', '_blank');
    }
    }
    >
      <BsTwitter />
    </div>
    <div className='cursor-pointer' 
    onClick={() => {
      
      window.open('https://www.linkedin.com/company/spotmies', '_blank');
    }}
    >
      <FaLinkedin />
    </div>
    <div className='cursor-pointer'
      onClick={() => {
      
        window.open('https://www.instagram.com/spotmies', '_blank');
      }}
    >
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
