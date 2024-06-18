import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { brand } from "../colors";

const buttonLinkBase = defineStyle({
  fontWeight: 700,
  lineHeight: 1.5,
  padding: ".25rem 1.5rem",
  borderRadius: "100px", // TODO: Use rem
  width: "fit-content",
  // Remove browser's default focus styles
  _focus: {
    outline: "none",
    boxShadow: "none",
  },
  ":focus-visible": {
    outlineOffset: "2px",
    // Note: Using brand colors in outline definition requires using CSS variable
    outline: "2px solid var(--focus-outline-color)",
  },
  _disabled: {
    opacity: 1,
    cursor: "not-allowed",
  },
});

const outlineButtonLink = defineStyle({
  ...buttonLinkBase,
  bg: "transparent",
  border: "2px solid",
  borderColor: "var(--primary)",
  color: "var(--primary)",
  _hover: {
    textDecoration: "none",
    bg: brand.black9,
    _dark: {
      bg: brand.white17,
    },
  },
});

const mdButton = defineStyle({
  height: 12,
  py: 1,
  px: 4,
});

const smButton = defineStyle({
  fontSize: "0.75rem",
  height: 8,
  py: 1.5,
  pr: 3,
  pl: 3.5,
});

const noUnderline = defineStyle({
  textDecoration: "none",
  _hover: {
    textDecoration: "none",
  },
});

export const linkTheme = defineStyleConfig({
  variants: {
    noUnderline,
    outlineButtonLink,
  },
  sizes: {
    smButton,
    mdButton,
  },
});
