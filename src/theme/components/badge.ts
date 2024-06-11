import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  fontWeight: 800,
  fontSize: "0.75rem",
  py: 0,
  px: 2,
  lineHeight: "23px",
  minH: "23px",
  borderRadius: "0.25rem",
  bg: "brand.blueBlack",
  color: "brand.white",
  _dark: {
    bg: "brand.gray5",
    color: "brand.blueBlack",
  },
};

const negative = defineStyle({
  color: "brand.black",
  bg: "brand.gray5",
  _dark: {
    bg: "brand.gray5",
    color: "brand.black",
  },
});

export const badgeTheme = defineStyleConfig({
  baseStyle,
  variants: { negative },
});
