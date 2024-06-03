import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { brand } from "./colors";
import { components } from "./components";

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
  components: components,
});

export default theme;
