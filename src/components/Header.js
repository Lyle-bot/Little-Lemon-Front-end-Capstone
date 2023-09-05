import React from 'react';
import Logo from './../images/Logo.svg'

const Header = () => {
  return (
    <header className='mt-3'>
      <img src={Logo} alt="Little Lemon Logo" />
      {/* Other header content here */}
    </header>
  );
};

export default Header;
