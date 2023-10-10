// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
    Button: {
      primaryColor: "#283593",
    },
    Input: {
      colorBgContainer: "#283593",
      hoverBorderColor: "#283593",
      activeBorderColor: "#283593",
      activeShadow: "#ffffff",
    },
    Layout: {
      siderBg: "#f6ffed",
    },
  },
};

export default theme;
