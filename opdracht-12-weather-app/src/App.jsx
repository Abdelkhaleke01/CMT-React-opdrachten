// src/App.jsx
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "JOUW_API_KEY_HIER";

  async function fetchWeather(e) {
    e.preventDefault();

    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "404") {
        alert("Stad niet gevonden");
        return;
      }

      setWeatherData(data);
    } catch {
      alert("Er ging iets mis bij het ophalen van de data.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-blue-500 to-indigo-600">
      <h1 className="text-4xl font-bold text-white mb-6">🌤️ Weather App</h1>

      <form onSubmit={fetchWeather} className="flex gap-3 w-full max-w-md">
        <input
          type="text"
          placeholder="Voer een stad in..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 rounded-xl w-full border-none outline-none shadow-md"
        />
        <button
          type="submit"
          className="bg-white text-blue-600 px-5 py-3 rounded-xl font-semibold shadow-md"
        >
          Zoek
        </button>
      </form>

      <WeatherInfo weather={weatherData} />
    </div>
  );
}
