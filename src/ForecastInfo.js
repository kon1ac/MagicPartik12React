import React from 'react';

function ForecastInfo({ forecastData }) {
    const forecasts = forecastData.list.slice(0, 7).map((item) => {
        const { dt, main, weather } = item;
        const [icon] = weather.icon;
        const date = new Date(dt * 1000).toLocaleDateString();

        return (
            <div key={dt} className="forecast-item">
                <h3>{date}</h3>
                <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={weather.description} />
                <p>High: {main.temp_max}°C</p>
                <p>Low: {main.temp_min}°C</p>
            </div>
        );
    });

    return <div className="forecast-info">{forecasts}</div>;
}

export default ForecastInfo;
