import { extendTheme } from "@chakra-ui/react";
import { brand } from "./colors";
import { styles } from "./styles";
import { textStyles } from "./textStyles";
import "@fontsource-variable/catamaran";

import { badgeTheme } from "./components/Badge";
import { buttonTheme } from "./components/Button";
import { modalTheme } from "./components/Modal";

export const theme = extendTheme({
  styles,
  colors: {
    brand,
  },
  fonts: {
    body: "'Catamaran Variable', sans-serif",
    heading: "'Catamaran Variable', sans-serif",
  },
  textStyles,
  components: {
    Badge: badgeTheme,
    Button: buttonTheme,
    modal: modalTheme,
  },
});
