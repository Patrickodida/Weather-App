import React, { useState, useEffect } from "react";

// API Key
const API_key = "af4b03cce02e51f41836e5045498772e";

const Weather = () => {
    const [city, setCity] = useState("Kampala");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        if(!city) return;
        setLoading(true);
        setError("");

        try{
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
            );
            if(!res.ok) throw new Error("City not found");
            const data = await res.json();
            setWeather(data);
        } catch(err) {
            setError(err.message);
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchWeather();
    }, []);

    // Function to handleSearch
    const handleSearch = () => {
        fetchWeather();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold mb-6 text-blue-800 flex items-center gap-2">
                < i className="bx bx-sun bx-spin text-yellow-500 text-5xl" ></i>
                Weather App
                </h1>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <input type="text"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="px-4 py-2 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
                 <button onClick={handleSearch} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                    Search city
                 </button>
            </div>

            {loading && <p className="text-lg text-gray-700">Loading...</p>}

            {error && <p className="text-red-600 text-lg font-medium mb-4">{error}</p>}

            {weather && !loading && (
                <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center space-y-2">
                    <h2 className="text-2xl font-semibold text-blue-700">{weather.name}</h2>
                    <p className="text-lg">Tempreture:{weather.main.temp}°C</p>
                    <p className="text-lg">Humidity:{weather.main.humidity}%</p>
                    <p className="text-lg capitalize">Condition: {weather.weather[0].description}</p>
                    <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
                </div>
            )}

        </div>
    )
}
export default Weather;