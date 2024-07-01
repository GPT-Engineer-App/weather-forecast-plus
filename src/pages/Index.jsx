import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Welcome to Weather Forecast App</h1>
        <p className="text-center">
          Get the latest weather updates and forecasts.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <Link to="/login" className="text-blue-500">Login</Link>
          <Link to="/forecast" className="text-blue-500">Weather Forecast</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;