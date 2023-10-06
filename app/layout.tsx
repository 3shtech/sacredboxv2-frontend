import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import StyledComponentsRegistry from "./lib/AntdRegistry";
import { Merriweather_Sans } from "next/font/google";

const merriWeather_Sans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriWeather_Sans",
});

export const metadata: Metadata = {
  title: "SacredBox",
  description: "Meet your spiritual side",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${merriWeather_Sans.variable} text-black`}>
        <Navbar />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
