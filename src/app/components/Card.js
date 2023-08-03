"use client"
{/* archivo Card.js dentro de carpeta components dentro de carpeta app, dentro de carpeta src*/}
import React from 'react'
import Image from 'next/image'

export default function Card({ temperature, cityName, weatherIcon }) {
  // Función para obtener la URL de la imagen según el código del icono del clima
  const getWeatherIconUrl = (iconCode) => {
    return `/img/${iconCode}.png`;
  }

  console.log(weatherIcon);
    
  return (
    <div>
      <div className='main'>
        <div className='input'>
        <button>Search for places</button>
       </div>
        <div className='imagen'>
        {/* Usar la función getWeatherIconUrl para obtener la URL de la imagen */}
        {weatherIcon && <Image src={getWeatherIconUrl(weatherIcon)} alt='imagen' width={"100"} height={"100"} />}
        </div>
        <div>
          {temperature && <div>{temperature}°C</div>}
          {cityName && <div>{cityName}</div>}
        </div>
       </div>
    </div>
  )
}