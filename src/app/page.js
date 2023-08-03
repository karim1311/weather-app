"use client"
{/* archivo page.js dentro de carpeta app, dentro de carpeta src */}
import React from 'react';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import "./global.css";


export default function Home () {
  const KEY = "8200f5153a1ec94c419b46c12f847e8f";
  const city = "Pueblo Nuevo";
  const [temperature, setTemperature] = useState();
  const [cityName, setCityName] = useState();
  const [weatherIcon, setWeatherIcon] = useState();


  useEffect(() => {
    const promesa = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`);
    Promise.all([promesa]).then(async (values) => {
      const data = await values[0].json();
      setTemperature(data?.main?.temp);
      setCityName(data?.name);
      setWeatherIcon(data?.weather?.[0]?.icon);
    });
  }, []);
  
  return (
    <div>
      <h1>Fetch de Weather API</h1>
      {temperature && <Card temperature={temperature} cityName={cityName} weatherIcon={weatherIcon} />} {/* Pasar la temperatura y el nombre de la ciudad como props a Card */}
    </div>
  )
}