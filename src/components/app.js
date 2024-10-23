import React from 'react';
import './App.css';
import Header from './components/Header';
import WidgetCard from './components/WidgetCard';
import Tasks from './components/Tasks';
import Resources from './components/Resources';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="widgets">
        <WidgetCard title="Water Level" icon="/path/to/water-icon.svg" value="4/5" unit="Gallons" />
        <WidgetCard title="Light Intensity" icon="/path/to/light-icon.svg" value="Boost" />
      </div>

      <Tasks />

      <Resources />

      <BottomNav />
    </div>
  );
}

export default App;
