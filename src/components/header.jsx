import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="icon profile-icon"></div>
      <h1>My Garden</h1>
      <div className="icon settings-icon"></div>
    </header>
  );
};

export default Header;
