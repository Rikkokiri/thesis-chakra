import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { textStyles } from "../textStyles";

// Modal box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  /* overlay: {
    bg: 'blackAlpha.200', //change the background
  }, */
  dialog: {
    borderRadius: 0,
    bg: "white",
  },
  header: {
    ...textStyles.h3,
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
