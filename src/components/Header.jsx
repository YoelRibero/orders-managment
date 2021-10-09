import React from 'react';

import Avatar from '../../public/img/avatar.svg';

const Header = ({ name }) => (
  <header className='header'>
    <div className='container'>
      <div className="header-container">
        <Avatar />
        <p>Hola, {name}!</p>
      </div>
    </div>
  </header>
)

export default Header;
