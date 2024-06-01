import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  fontWeight: 700,
  lineHeight: 1.5,
  padding: ".25rem 1.5rem",
  borderRadius: "100px", // TODO: Use rem
  minWidth: "48px",
  minHeight: "48px",
};

const solid = defineStyle({
  bg: "brand.black",
  color: "white",
  _hover: {
    bg: "brand.black70",
  },
});

const outline = defineStyle({
  border: "2px solid",
  borderColor: "brand.black",
  _hover: {
    bg: "brand.black9",
  },
});

const ghost = defineStyle({
  border: "none",
  bg: "transparent",
  // padding: 4px 10px, + px: 4px
});

const toggledGhost = defineStyle({
  ...ghost,
  bg: "brand.black9",
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: { solid, outline, ghost, toggledGhost },
});
