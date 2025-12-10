// src/WeatherInfo.jsx
export default function WeatherInfo({ weather }) {
  if (!weather) return null;

  const { name, main, weather: weatherArr, wind } = weather;
  const icon = weatherArr[0].icon;
  const description = weatherArr[0].description;

  return (
    <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl text-white mt-6 w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold flex items-center gap-3 justify-center">
        {name}
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      </h2>

      <p className="text-xl mt-2 font-semibold">
         Temperatuur: {main.temp}°C
      </p>
      <p>Gevoelstemperatuur: {main.feels_like}°C</p>
      <p>Luchtvochtigheid: {main.humidity}%</p>
      <p>Wind: {wind.speed} m/s</p>
    </div>
  );
}
