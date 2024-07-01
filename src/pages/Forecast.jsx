import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Forecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      fetchWeatherData();
    }
  }, [navigate]);

  const fetchWeatherData = async () => {
    // Replace with your weather API endpoint
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=London&days=7');
    const data = await response.json();
    setWeatherData(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mb-4">Logout</button>
      {weatherData ? (
        <div>
          <h2 className="text-2xl mb-4">Weather Forecast for {weatherData.location.name}</h2>
          <div className="space-y-4">
            {weatherData.forecast.forecastday.map((day) => (
              <div key={day.date} className="border p-4 rounded">
                <h3 className="text-xl">{day.date}</h3>
                <p>Max Temp: {day.day.maxtemp_c}°C</p>
                <p>Min Temp: {day.day.mintemp_c}°C</p>
                <p>Condition: {day.day.condition.text}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Forecast;