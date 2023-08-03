import React, { useEffect, useState } from 'react';
import "./Details.css"

export default function Details() {
  const KEY = "8200f5153a1ec94c419b46c12f847e8f";
  const city = "Pueblo Nuevo";
  const [windSpeed, setWindSpeed] = useState();
  const [humidity, setHumidity] = useState();
  const [visibility, setVisibility] = useState();
  const [airPressure, setAirPressure] = useState();

  useEffect(() => {
    const promesa = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`);
    Promise.all([promesa]).then(async (values) => {
      const data = await values[0].json();
      setWindSpeed(data?.wind?.speed);
      setHumidity(data?.main?.humidity);
      setVisibility(data?.visibility);
      setAirPressure(data?.main?.pressure);
    });
  }, []);

  return (
    <div className='details-container'>
      <div className='box'>
        <p className='title'>Wind status:</p>
        <p className='data'>{windSpeed} m/s</p>
      </div>
      <div className='box'>
        <strong>Humidity:</strong> {humidity}% ({humidity}%)
        <progress value={humidity} max='100'></progress>
      </div>
      <div className='box'>
        <strong>Visibility:</strong> {visibility} meters
      </div>
      <div className='box'>
        <strong>Air Pressure:</strong> {airPressure} hPa
      </div>
    </div>
  );
}
