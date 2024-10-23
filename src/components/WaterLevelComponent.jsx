import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WaterLevelComponent = () => {
  const [waterLevel, setWaterLevel] = useState(0);

  useEffect(() => {
    const fetchWaterLevel = async () => {
      try {
        const response = await axios.get('/api/water-level');
        setWaterLevel(response.data.level);
      } catch (error) {
        console.error('Error fetching water level:', error);
      }
    };

    fetchWaterLevel();
  }, []);

  return (
    <div className="water-level">
      <h2>Water Level</h2>
      <p>{waterLevel}%</p>
    </div>
  );
};

export default WaterLevelComponent;
