import React from 'react';
import Logo from './../images/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faInstagram, faFacebook, faLinkedin, } from '@fortawesome/free-brands-svg-icons'; 
const Footer = () => {
  
const socials = [ 
    { 
      icon: faEnvelope, 
      url: "mailto: hello@example.com", 
    }, 
    { 
      icon: faInstagram,  // Replaced GitHub with Instagram
      url: "https://www.instagram.com/your_instagram_handle/",  // Update the URL
    }, 
    { 
      icon: faLinkedin, 
      url: "https://www.linkedin.com/in/sureskills/", 
    }, 
  
    { 
      icon: faFacebook,  // Replaced Stack Overflow with Facebook
      url: "https://www.facebook.com/your_facebook_page/",  // Update the URL
    }, 
  ];

  return (
    <footer>
      <div className='container mt-2'>
        <hr className='p-2'></hr>
        <div className='row'>
          <div className='col'>
            <img src={Logo} alt="Little Lemon Logo" />
          </div>
          <div className='col'>
          <nav>
            <ul>
              <li><Link to="/" className="text-primary" aria-current="page">Home</Link></li>
              <li><Link to="/about" className="text-primary">About</Link></li>
              <li><Link to="/menu" className="text-primary">Menu</Link></li>
              <li><Link to="/reservations" className="text-primary">Reservations</Link></li>
              <li><Link to="/order-online" className="text-primary">Order Online</Link></li>
              <li><Link to="/login" className="text-primary">Login</Link></li>
            </ul>
          </nav>

          </div>
          <div className='col'>
           
            {socials.map(({ icon, url }) => (
              <a 
                className="me-2" 
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={icon} size="2x" />
              </a>
            ))}
          </div>
          <div className='col'>
            <p><strong>Contact Info</strong><br></br>Phone: (123) 456-7890<br></br>Email: info@littlelemon.com</p>
          
            











          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
