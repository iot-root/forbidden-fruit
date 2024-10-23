import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HumidityTemperatureComponent = () => {
  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const fetchHumidityAndTemperature = async () => {
      try {
        const response = await axios.get('/api/sensors');
        setHumidity(response.data.humidity);
        setTemperature(response.data.temperature);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchHumidityAndTemperature();
  }, []);

  return (
    <div className="humidity-temperature">
      <h2>Humidity</h2>
      <p>{humidity}%</p>
      <h2>Temperature</h2>
      <p>{temperature}°C</p>
    </div>
  );
};

export default HumidityTemperatureComponent;
