import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  fontWeight: 700,
  lineHeight: 1.5,
  padding: ".25rem 1.5rem",
  borderRadius: "100px", // TODO: Use rem
};

const solid = defineStyle({
  color: "white",
  bg: "brand.blueBlack",
  _dark: {
    color: "brand.blueBlack", // TODO: blueBlack
    bg: "brand.gray6",
  },
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: { solid },
  defaultProps: {
    variant: "solid",
  },
  // variants: { solid, outline, ghost, toggledGhost },
});
