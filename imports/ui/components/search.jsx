import React, { useState } from 'react';
import SearchHistory from './searchHistory';
import { Meteor } from 'meteor/meteor';

// The reason I used 'useState' instead of 'useEffect' is because
// I'm making an AJAX GET request on the server so that the client
// can't see the sensitive data (like API Key) on the 'Network' tab
// in browser's developer tools.

const Search = () => {
    const [city, setState] = useState({
        name: '',
        sys: {
            country: ''
        },
        coord: {
            lat: '',
            lon: ''
        },
        main: {
            humidity: '',
            pressure: '',
            temp: '',
            temp_max: '',
            temp_min: ''
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        // Get the value from input
        let query = e.currentTarget.query.value;

        // Make an HTTP GET request on the server
        Meteor.call('getWeatherData', query, (err, res) => {
            if (!err) {
                setState(res);    
            } else {
                throw err;
            }
        });
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-md-8 col-10">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="query" className="bmd-label-floating">Search by city name</label>
                            <input type="search" className="form-control" id="query" name="query" placeholder="e.g. London or San Francisco" />
                        </div>
                    </form>
                    <div className="search-results">
                        <div id="result">
                            <h2>City name: <span className="text-success">{city.name}, {city.sys.country}</span></h2>
                            <p>Coordinates: Lat: {city.coord.lat}, Lon: {city.coord.lon}</p>
                            <span className="text-primary">Weather stats</span>
                            <ul className="list-group">
                                <li className="list-group-item">Humidity: {city.main.humidity} %</li>
                                <li className="list-group-item">Pressure: {city.main.pressure} hPa</li>
                                <li className="list-group-item">Current temperature: {city.main.temp} °F</li>
                                <li className="list-group-item">Maximum temperature (Today): {city.main.temp_max} °F</li>
                                <li className="list-group-item">Minimum temperature (Today): {city.main.temp_min} °F</li>
                            </ul>
                        </div>
                    </div>
                    <div className="search-history">
                        <span>Your search history</span>
                        <SearchHistory />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Search;