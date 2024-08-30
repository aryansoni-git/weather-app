# Weather App

A modern, responsive weather application built using **Next.js 14** and **Tailwind CSS**. This app provides real-time weather data for any city worldwide, utilizing the **OpenWeatherMap API**. The Weather App allows users to search for a city's current weather conditions, including temperature, humidity, wind speed, and a dynamic weather icon that changes based on the weather.

## Demo

![cover](/public/cover.png)

You can try the game live [here](https://github.com/aryansoni-git/weather-app/)!

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Integration](#api-integration)
- [Technologies Used](#technologies-used)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time weather data fetching from the OpenWeatherMap API.
- Dynamic icons that change based on weather conditions (e.g., clear, rain, mist, drizzle, clouds, snow, wind).
- Responsive design with Tailwind CSS, optimized for both desktop and mobile devices.
- Error handling for invalid city names or network issues.
- User-friendly UI with search functionality.
- Displays temperature, humidity, wind speed, and weather conditions.

## Getting Started

To get a local copy of this project up and running, follow these steps.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn (package manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aryansoni-git/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Get an API key from OpenWeatherMap:**
   - Visit [OpenWeatherMap](https://openweathermap.org/api) and sign up to get your API key.

4. **Set up environment variables:**
   - Create a `.env.local` file in the root directory and add your API key:
     ```
     NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=your_api_key_here
     ```

5. **Run the application:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Visit the app in your browser:**
   - Open [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

1. Enter the name of the city in the search bar.
2. Click on the "Search" button.
3. The app will fetch and display the current weather data, including temperature, humidity, wind speed, and the corresponding weather icon.

## Components

- **WeatherApp.jsx**: The main component that manages state and handles API requests.
- **Search.jsx**: A component for the search input and button, allowing users to search for a city.
- **Card.jsx**: A reusable component that displays weather data such as temperature, humidity, wind speed, and icons.

## API Integration

The app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. It sends a request with the city name and receives the current weather conditions.

- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Parameters:**
  - `q`: City name
  - `appid`: Your API key
  - `units`: Units of measurement (e.g., `metric` for Celsius)

Example of an API call:
```javascript
axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
);
```

## Technologies Used

- **Next.js 14**: A React framework for building server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for building responsive layouts.
- **Axios**: A promise-based HTTP client for making API requests.
- **JavaScript (ES6+)**: The core language for building the app.

## Best Practices

- **Environment Variables:** Securely manage API keys using environment variables.
- **Component Reusability:** Modular and reusable components like `Card` for displaying data.
- **Error Handling:** Display user-friendly messages for errors and loading states.
- **Optimized API Requests:** Use `useEffect` for initial data fetching and caching to avoid excessive API calls.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and is well-documented.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
