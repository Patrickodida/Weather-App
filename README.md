# Weather App 

A simple and modern weather application built with **React**, **Vite**, and **Tailwind CSS**. It allows users to search for any city and view real-time weather data including temperature, humidity, wind speed, and overall conditions. This project demonstrates practical skills in API integration, state management, and responsive UI design.

## Live Demo

[View Live Demo](#)


##  Features

-  Search for any city to retrieve current weather data
-  Displays temperature, humidity, wind speed, and condition
-  Uses **OpenWeatherMap API** for real-time data
-  Error handling for unknown or invalid city names
-  Fast loading and development with **Vite**
-  Clean, responsive UI styled with **Tailwind CSS**
-  Uses **React hooks** (`useState`, `useEffect`) for state and effects


## 🧪 Tech Stack

| Tech           | Description                             |
|----------------|-----------------------------------------|
| React          | JavaScript library for UI               |
| Vite           | Fast dev server & bundler               |
| Tailwind CSS   | Utility-first CSS framework             |
| OpenWeatherMap | REST API for real-time weather data     |
| Boxicons       | Icon library for UI elements            | 


##  How It Works

###  API Integration

The app fetches weather data from [OpenWeatherMap](https://openweathermap.org/api) using a city name and displays the response dynamically. The API key is stored inside the component for demo purposes.

###  User Flow

1. App loads with default city (`Kampala`).
2. User enters a city name and clicks **Search city**.
3. App fetches data from the API and displays weather info.
4. If the city is invalid or not found, an error message is shown.


## 🚀 Installation & Setup

1. **Clone the repository:**

```bash
git clone 
cd smart-weather-app