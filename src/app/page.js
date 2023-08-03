"use client"
import React from 'react'
import Card from '../../components/Card'
import { useEffect, useState } from 'react';
import "./styles.css"


export default function Home () {
  const KEY = "8200f5153a1ec94c419b46c12f847e8f";
  const city = "Pueblo Nuevo";
  const [datos, setDatos] = useState();

  useEffect(() => {
    const promesa = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`);
    Promise.all([promesa]).then(async (values) => {
      const data = await values[0].json();
      setDatos(data);
    })
  }, []);

    const url =  `https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=8200f5153a1ec94c419b46c12f847e8f`


  return (
    <div>
      {datos && JSON.stringify(datos)}
    </div>
  )
}
