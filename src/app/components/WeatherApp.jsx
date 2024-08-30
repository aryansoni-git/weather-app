'use client';

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "./Card";
import Search from "./Search";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

const getIcon = (weatherMain) => {
    const iconMap = {
        Rain: "/rain.svg",
        Mist: "/mist.svg",
        Snow: "/snow.svg",
        Wind: "/wind.svg",
        Clear: "/clear.svg",
        Clouds: "/clouds.svg",
        Drizzle: "/drizzle.svg",
    };
    return iconMap[weatherMain] || '/clear.svg';
};

export default function WeatherApp() {
    const [city, setCity] = useState('jabalpur');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchWeatherData = useCallback(async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            setWeatherData(response.data);
        } catch (err) {
            setError("Unable to fetch weather data. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [city])

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const handleInputChange = (e) => { setCity(e.target.value); }

    const handleSearchClick = () => {
        if (city) { fetchWeatherData(); }
        else { setError("Please enter a city name."); }
    };

    return (
        <section className="bg-gradient-to-br from-[#00feba] to-[#5b548a] px-responsive-x py-responsive-y flex flex-col justify-center gap-5 rounded-2xl sm:gap-8 text-center">
            <Search onInputChange={handleInputChange} onSearchClick={handleSearchClick} />
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {weatherData && (
                <>
                    <Card
                        isTemp={true}
                        value={`${weatherData.main.temp}°C`}
                        text={weatherData.name}
                        alt={weatherData.weather[0].description}
                        src={getIcon(weatherData.weather[0].main)} // Icon directly from OpenWeatherMap
                    />
                    <div className="flex justify-around mt-5 sm:gap-20">
                        <Card isWind={false} value={`${weatherData.main.humidity}%`} />
                        <Card isWind={true} value={`${weatherData.wind.speed} km/h`} />
                    </div>
                </>
            )}
        </section>
    );
}