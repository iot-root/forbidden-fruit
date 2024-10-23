import React from 'react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <span className="nav-icon home"></span>
        <p>Home</p>
      </div>
      <div className="nav-item">
        <span className="nav-icon journal"></span>
        <p>Journal</p>
      </div>
      <div className="nav-item">
        <span className="nav-icon shop"></span>
        <p>Shop</p>
      </div>
      <div className="nav-item">
        <span className="nav-icon help"></span>
        <p>Help</p>
      </div>
    </div>
  );
};

export default BottomNav;
