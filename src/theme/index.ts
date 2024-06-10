import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { brand } from "./colors";
import { styles } from "./globalStyles";

import { badgeTheme } from "./components/badge";
import { buttonTheme } from "./components/button";
import { cardTheme } from "./components/card";
import { headingTheme } from "./components/heading";
import { iconButtonTheme } from "./components/icon-button";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true, // TODO: Switch back to using system theme
};

// 3. extend the theme
const theme = extendTheme({
  styles,
  config,
  colors: {
    brand,
  },
  // fonts: {},
  // textStyles: {},
  components: {
    Badge: badgeTheme,
    Button: buttonTheme,
    Card: cardTheme,
    Heading: headingTheme,
    IconButton: iconButtonTheme,
  },
  semanticTokens: {
    colors: {
      primary: {
        default: "brand.blueBlack",
        _dark: "brand.gray5",
      },
      text: {
        default: "brand.blueBlack",
        _dark: "brand.gray5",
      },
      textNegative: {
        default: "brand.white",
        _dark: "brand.blueBlack",
      },
      bodyBg: {
        default: "brand.gray10",
        _dark: "brand.black",
      },
      compBackground: {
        _light: "brand.white",
        _dark: "brand.blueBlack",
      },
      footer: {
        default: "brand.gray5",
        _dark: "brand.gray90",
      },
    },
  },
});

export default theme;
