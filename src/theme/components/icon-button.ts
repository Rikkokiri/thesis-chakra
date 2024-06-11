import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  _focus: {
    bg: "transparent",
  },
};

const xxl = defineStyle({
  fontSize: "1.5rem",
  borderRadius: "4px", // TODO: Configure as part of theme
});

export const iconButtonTheme = defineStyleConfig({
  baseStyle,
  sizes: { xxl },
});
