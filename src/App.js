import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import ForecastInfo from './ForecastInfo';
import './App.css';

const API_KEY = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}';
const DEFAULT_CITIES = ['Москва', 'Санкт-Петербург', 'Домодедово', 'Лобня', 'Раменское'];

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleForecastClick = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${weatherData.name}&appid=${API_KEY}&units=metric`);
      setForecastData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Приложение для прогнозирования погоды</h1>
          <input type="text" value={city} onChange={handleCityChange} placeholder="Введите название города" />
          <button onClick={handleSearchClick}>Поиск</button>
          {weatherData && (
              <div className="weather-info">
                <WeatherInfo weatherData={weatherData} />
                <button onClick={handleForecastClick}>Получить прогноз</button>
              </div>
          )}
          {forecastData && <ForecastInfo forecastData={forecastData} />}
          <div className="default-cities">
            {DEFAULT_CITIES.map((cityName) => (
                <button key={cityName} onClick={() => setCity(cityName)}>{cityName}</button>
            ))}
          </div>
        </header>
      </div>
  );
}

export default App;
