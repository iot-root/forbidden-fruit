import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-section">
      <div className="resource-button">
        <span className="resource-icon live-view"></span>
        <p>Live View</p>
      </div>
      <div className="resource-button">
        <span className="resource-icon plant-book"></span>
        <p>Plant Book</p>
      </div>
    </div>
  );
};

export default Resources;
