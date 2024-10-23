import React from 'react';
import WaterLevelComponent from './WaterLevelComponent';
import PumpControlComponent from './PumpControlComponent';
import HumidityTemperatureComponent from './HumidityTemperatureComponent';
import CameraFeedComponent from './CameraFeedComponent';

const GardenDashboard = () => {
  return (
    <div className="garden-dashboard">
      <h1>Hydroponic Garden Dashboard</h1>

      <div className="widget">
        <WaterLevelComponent />
      </div>

      <div className="widget">
        <PumpControlComponent />
      </div>

      <div className="widget">
        <HumidityTemperatureComponent />
      </div>

      <div className="widget">
        <CameraFeedComponent />
      </div>
    </div>
  );
};

export default GardenDashboard;
