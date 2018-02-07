import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import { randomIds } from '../utils';

import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeather(weatherData) {
    if (typeof(weatherData.message) === 'string') {
      return (
        <tr key={randomIds()}>
          <td>{weatherData.message}</td>
        </tr>
      );
    }
    const cityName = weatherData.city.name;
    const cityCenter = { lat: weatherData.city.coord.lat, lng: weatherData.city.coord.lon };
    const temperatureInFahrenheit = _.map(weatherData.list.map((weather) => weather.main.temp), 
      temp => _.round((1.8 * (temp - 273.15) + 32), 2));
    const pressure = weatherData.list.map((weather) => weather.main.pressure);
    const humidity = weatherData.list.map((weather) => weather.main.humidity);
    console.log('cityCenter');
    console.log(cityCenter);
    return (
      <tr key={cityName}>
        <td>
          <GoogleMap center={cityCenter} cityName={cityName}>
          </GoogleMap>
        </td>
        <td>
          <Chart data={temperatureInFahrenheit} color="blue" units="&#176;F"></Chart>
        </td>
        <td>
          <Chart data={pressure} color="blue" units="hPa"></Chart>
        </td>
        <td>
          <Chart data={humidity} color="black" units="%"></Chart>  
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&#176;F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);