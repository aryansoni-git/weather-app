import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App",
  description: "Weather App: A modern, responsive weather app built with Next.js 14 and Tailwind CSS. It fetches real-time weather data from the OpenWeatherMap API, showing temperature, humidity, wind speed, and dynamic icons for any city worldwide.",
  icons: {
    icon: './logo.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
