// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
    Button: {
      colorPrimary: "#283593",
      algorithm: true,
    },
    Layout: {
      siderBg: "blue",
    },
  },
};

export default theme;
