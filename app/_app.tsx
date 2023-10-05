import "./globals.css";
import type { AppProps } from "next/app";

import { Merriweather_Sans } from "next/font/google";

const merriWeather_Sans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriWeather_Sans",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${merriWeather_Sans.variable} text-white`}>
      <Component {...pageProps} />
    </main>
  );
}
