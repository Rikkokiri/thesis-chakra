import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { brand } from "../colors";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: brand.black41,
    _dark: {
      bg: brand.black70,
    },
  },
  dialog: {
    my: "auto",
    borderRadius: 0,

    padding: 4,
  },
  body: {
    p: 0,
    m: 0,
  },
  closeButton: {
    padding: 0,
    h: "1.5rem",
    w: "1.5rem",
    top: 4,
    right: 4,
    borderRadius: "4px",
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
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  sizes: {
    // Default size
    md: {
      // Setting size limits worked only partially via baseStyle
      dialog: {
        minWidth: "var(--modal-min-width)",
        minHeight: "var(--modal-min-height)",
        maxHeight: "var(--modal-max-height)",
        maxWidth: "var(--modal-max-width)",
        overflowY: "auto",
      },
    },
  },
});
