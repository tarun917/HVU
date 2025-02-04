// src/ThreeJs/weather/WeatherEffects.jsx
import React, { useState, useEffect } from 'react';
import Rain from '../components/Rain'; // Assuming you have a Rain component
import Clouds from '../components/Clouds'; // Assuming you have a Clouds component

const WeatherEffects = () => {
  const [weather, setWeather] = useState('clear'); // Possible values: 'clear', 'rain', 'cloudy'

  useEffect(() => {
    const changeWeather = () => {
      const weatherConditions = ['clear', 'rain', 'cloudy'];
      const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
      setWeather(randomWeather);
    };

    const intervalId = setInterval(changeWeather, 60000); // Change weather every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {weather === 'rain' && <Rain />}
      {weather === 'cloudy' && <Clouds />}
      {/* Add more weather effects as needed */}
    </>
  );
};

export default WeatherEffects;