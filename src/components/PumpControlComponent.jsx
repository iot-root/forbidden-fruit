import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PumpControlComponent = () => {
  const [pumpOn, setPumpOn] = useState(false);

  useEffect(() => {
    const fetchPumpStatus = async () => {
      try {
        const response = await axios.get('/api/pump-status');
        setPumpOn(response.data.isPumpOn);
      } catch (error) {
        console.error('Error fetching pump status:', error);
      }
    };

    fetchPumpStatus();
  }, []);

  const togglePump = async () => {
    try {
      const response = await axios.post('/api/toggle-pump');
      setPumpOn(response.data.isPumpOn);
    } catch (error) {
      console.error('Error toggling pump:', error);
    }
  };

  return (
    <div className="pump-control">
      <h2>Pump Control</h2>
      <button onClick={togglePump}>
        {pumpOn ? 'Turn Off Pump' : 'Turn On Pump'}
      </button>
    </div>
  );
};

export default PumpControlComponent;
