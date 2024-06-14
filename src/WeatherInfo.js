import React from 'react';

function WeatherInfo({ weatherData }) {
    const { name, sys, main, weather } = weatherData;
    const [icon] = weather.icon;
    const [description] = weather.description;

    return (
        <div className="weather-info">
            <h2>{name}, {sys.country}</h2>
            <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
            <p>{description}</p>
            <p>Temperature: {main.temp}°C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {main.wind_speed} m/s</p>
        </div>
    );
}

export default WeatherInfo;
