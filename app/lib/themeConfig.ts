// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimaryBorder: "#283593",
    colorPrimary: "#283593",
    colorPrimaryHover: "#3d4eca",
    colorBgContainer: "#ffffff",
  },
  components: {
    Button: {
      borderRadius: 10,
    },
    Input: {
      hoverBorderColor: "#283593",
      activeBorderColor: "#283593",
      activeShadow: "#ffffff",
    },
    Slider: {
      handleActiveColor: "#283593",
      trackBg: "#283593",
      trackHoverBg: "#283593",
    },
    DatePicker: {},
    Layout: {
      siderBg: "#ffffff",
    },
  },
};

export default theme;
