import React from 'react';

const CameraFeedComponent = () => {
  return (
    <div className="camera-feed">
      <h2>Live Camera Feeds</h2>
      <video src="http://your-dev-board-ip:port/camera1-stream" controls autoPlay />
      <video src="http://your-dev-board-ip:port/camera2-stream" controls autoPlay />
    </div>
  );
};

export default CameraFeedComponent;
