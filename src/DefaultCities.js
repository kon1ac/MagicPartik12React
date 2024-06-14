import React from 'react';

function DefaultCities({ cities, onCityClick }) {
    const cityButtons = cities.map((city) => (
        <button key={city} onClick={() => onCityClick({ q: city })}>{city}</button>
    ));

    return <div className="default-cities">{cityButtons}</div>;
}

export default DefaultCities;
