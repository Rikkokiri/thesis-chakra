import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    borderRadius: "4px",
    py: "5rem",
    px: "1.5rem",
    bg: "brand.white",
    _dark: {
      bg: "brand.blueBlack",
    },
  },
  header: {
    padding: 0,
    paddingBottom: "2px",
  },
  body: {},
  footer: {
    paddingTop: "2px",
  },
});

const centered = definePartsStyle({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
  },
});

const sizes = {
  lg: definePartsStyle({
    container: {
      w: "100%",
      maxW: "680px",
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({
  sizes,
  baseStyle,
  variants: { centered },
});
