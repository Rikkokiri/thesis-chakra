import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { brand } from "./colors";
import { badgeTheme } from "./components/badge";
import { buttonTheme } from "./components/button";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    brand,
  },
  // fonts: {},
  // textStyles: {},
  components: {
    Badge: badgeTheme,
    Button: buttonTheme,
  },
});

export default theme;
