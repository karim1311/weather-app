"use client";
{
  /* archivo page.js dentro de carpeta app, dentro de carpeta src */
}
import React from "react";
import Card from "./components/Card/Card";
import Details from "./components/Details/Details";
import { useEffect, useState } from "react";
import "./global.css";

export default function Home() {
  const KEY = "8200f5153a1ec94c419b46c12f847e8f";
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState();
  const [cityName, setCityName] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [showSearch, setShowSearch] = useState(false);


  const handleSearchClick = () => {
    setShowSearch(true);
  };

  
  const handleSearch = () => {
    fetchWeatherData(city);
    setShowSearch(false);
  };


  const fetchWeatherData = (city) => {
    const promesa = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`);
    Promise.all([promesa]).then(async (values) => {
      const data = await values[0].json();
      setTemperature(Math.round(data?.main?.temp));
      setCityName(data?.name);
      setWeatherIcon(data?.weather?.[0]?.icon);
    });
  };

  useEffect(() => {
    fetchWeatherData("Pueblo Nuevo"); // Load default data when the page loads
  }, []);

  return (
      <div className="main-container">
        {!showSearch ? (
          <div className="default-view">
            {temperature && (
              <div className="left-column">
                <Card
                  temperature={temperature}
                  cityName={cityName}
                  weatherIcon={weatherIcon}
                />
              </div>
            )}
            <div className="right-column">
              {cityName && <Details city={cityName} />}
            </div>
            <div className="search-button">
              <button onClick={handleSearchClick}>Search for places</button>
            </div>
          </div>
        ) : (
          <div className="search-container">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        )}
      </div>
    );
  }