import { ConfigProvider } from "antd";
import HeroSection from "./components/Home/hero";
import theme from "./lib/themeConfig";

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <main className="w-full">
        <HeroSection />
      </main>
    </ConfigProvider>
  );
}
