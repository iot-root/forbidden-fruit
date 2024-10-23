import React from 'react';
import './WidgetCard.css';

const WidgetCard = ({ title, icon, value, unit }) => {
  return (
    <div className="widget-card">
      <div className="widget-header">
        <div className="widget-icon" style={{ backgroundImage: `url(${icon})` }}></div>
        <h2>{title}</h2>
      </div>
      <div className="widget-value">
        <span>{value}</span> {unit}
      </div>
    </div>
  );
};

export default WidgetCard;
