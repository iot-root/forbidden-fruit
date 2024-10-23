import React from 'react';

const CameraFeedComponent = () => {
  return (
    <div className="camera-feed">  
      <h2>AI Camera Feed</h2>
      <img src="http://localhost:5000/video_feed" alt="Live Camera Feed" />
    </div>
  );
};

export default CameraFeedComponent;
