import { ConfigProvider } from "antd";
import HeroSection from "./components/Home/hero";
// import theme from "./lib/themeConfig";

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#283593",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <main className="w-full">
        <HeroSection />
      </main>
    </ConfigProvider>
  );
}
