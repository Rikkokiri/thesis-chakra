import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { brand } from "./colors";
import { styles } from "./globalStyles";

import { badgeTheme } from "./components/badge";
import { buttonTheme } from "./components/button";
import { cardTheme } from "./components/card";
import { dividerTheme } from "./components/divider";
import { headingTheme } from "./components/heading";
import { iconButtonTheme } from "./components/icon-button";
import { modalTheme } from "./components/modal";
import textStyles from "./textStyles";
import { linkTheme } from "./components/link";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true, // TODO: Switch back to using system theme
};

// 3. extend the theme
const theme = extendTheme({
  config: config,
  textStyles: textStyles,
  colors: {
    brand,
  },
  styles: {
    global: styles.global,
  },
  // fonts: {},
  components: {
    Badge: badgeTheme,
    Button: buttonTheme,
    Card: cardTheme,
    Divider: dividerTheme,
    Heading: headingTheme,
    IconButton: iconButtonTheme,
    Link: linkTheme,
    Modal: modalTheme,
  },
  semanticTokens: {
    colors: {
      primary: {
        default: brand.blueBlack,
        _dark: brand.gray5,
      },
      text: {
        default: brand.blueBlack,
        _dark: brand.gray5,
      },
      textNegative: {
        default: brand.white,
        _dark: brand.blueBlack,
      },
      bodyBg: {
        default: brand.gray10,
        _dark: brand.black,
      },
      // Default background for most components
      primaryBg: {
        default: brand.white,
        _dark: brand.blueBlack,
      },
      agree: {
        default: brand.success,
        _dark: brand.greenBright,
      },
      disagree: {
        default: brand.error,
        _dark: brand.liveRed,
      },
    },
  },
});

export default theme;
