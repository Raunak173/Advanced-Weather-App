import React from "react";
import "./Card.css";

export const Card = ({
  city,
  temp,
  lon,
  lat,
  inf,
  humidity,
  pressure,
  wind,
  icon,
  sunrise,
  sunset,
}) => {
  const converter = (time) => {
    var date = new Date(time*1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var t = hours + ':' + minutes;
    return t;
  };
  return (
    <div className="container">
      <h1 className="heading">{city}</h1>
      <div className="contents">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <h3>Temperature : {temp}°C</h3>
        <h3>Longitudes Coordinate : {lon}°</h3>
        <h3>Latitudes Coordinate : {lat}°</h3>
        <h3>Weather Condition : {inf}</h3>
        <h3>Humidity : {humidity}%</h3>
        <h3>Pressure : {pressure} Pa</h3>
        <h3>Wind Speed : {wind} m/s</h3>
        <h3>Sunrise : {converter(sunrise)} IST</h3>
        <h3>Sunset : {converter(sunset)} IST</h3>
      </div>
    </div>
  );
};
