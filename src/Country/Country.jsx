import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries}) => {
    // console.log(handleVisitedCountries)

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        // setVisited(visited ? false : true)
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area} {
            country.area.area > 300000 ? "(Big Country)" : "(Small Country)"}
            </p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;