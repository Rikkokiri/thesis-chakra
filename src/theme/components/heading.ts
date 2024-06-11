import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  // fontFamily: "mono", // TODO: Customize heading font
  color: "brand.darkBlue",
  fontWeight: 700,
  lineHeight: 1.5,
  _dark: {
    color: "brand.white",
  },
});

const question = defineStyle({
  fontWeight: 900,
  fontSize: "1.5rem",
  maxWidth: "343px",
  textAlign: "center",
  color: "brand.blueBlack",
  _dark: {
    color: "brand.gray5",
  },
});

export const headingTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {
    size: "xl",
  },
  variants: { question },
  sizes: {
    // .heading-1-large
    "4xl": {
      fontSize: "2rem", // 32px
      lineHeight: 1.2,
    },
    // .heading-1
    "3xl": {
      fontSize: "1.75rem", // 28px
      fontWeight: 900,
      lineHeight: 1.3,
    },
    "2xl": {
      fontSize: "1.5rem", // 24px
    },
    // Card header
    xl: {
      fontSize: "1.25rem", // 20px
      lineHeight: 1.4,
      color: "brand.blueBlack",
      _dark: {
        color: "brand.gray5",
      },
    },
    // .heading-3
    lg: {
      fontSize: "1.125rem", // 18px
      fontWeight: 600,
      color: "brand.blueBlack",
      _dark: {
        color: "brand.gray5",
      },
    },
  },
});
