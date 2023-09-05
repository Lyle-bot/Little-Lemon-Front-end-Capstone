import React from 'react';
import Logo from './../images/Logo.svg'
const Footer = () => {
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
                            <li><a href="/home">Homepage</a></li>        
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/blog">Blog</a></li>  
                        </ul>
                    </nav>
                </div>
                <div className='col'>
                    <p>social media links</p>
                </div>
                <div className='col'>
                    <p>contact info</p>
                </div>
                <div>

                </div>
            </div>
        </div>
     

    </footer>
  );
};

export default Footer;
