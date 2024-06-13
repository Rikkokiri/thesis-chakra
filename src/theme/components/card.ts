import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { brand } from "../colors";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    borderRadius: "4px",
    py: "5rem",
    px: "1.5rem",
    backgroundColor: brand.white,
    _dark: {
      backgroundColor: brand.blueBlack,
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

/* Section card with simple header */
const section = definePartsStyle({
  container: {
    p: 0,
  },
  header: {
    px: 6,
    pt: "21px",
    pb: 4,
    borderBottomWidth: "1px",
    borderBottomColor: brand.gray20,
    borderBottomStyle: "solid",
    _dark: {
      borderBottomColor: brand.gray60,
    },
  },
  body: {
    p: 6,
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
  variants: { centered, section },
});
