import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { brand } from "../colors";

const baseStyle = {
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
};

const solid = defineStyle({
  color: brand.white,
  bg: brand.blueBlack,
  border: "none",
  _dark: {
    color: brand.blueBlack, // TODO: blueBlack
    bg: brand.gray5,
  },
  _hover: {
    bg: brand.black70,
    _dark: {
      bg: brand.white71,
    },
  },
});

const hoverBg = {
  _hover: {
    bg: brand.black9,
    _dark: {
      bg: brand.white17,
    },
  },
};

const outline = {
  bg: "transparent",
  border: "2px solid",
  borderColor: "var(--primary)",
  color: "var(--primary)",
  ...hoverBg,
  _disabled: {
    borderColor: brand.black15,
    _dark: {
      borderColor: brand.white21,
    },
  },
};

const toggleBg = {
  bg: brand.black9,
  _dark: {
    bg: brand.white17,
  },
};

const outlineToggled = defineStyle({
  ...outline,
  ...toggleBg,
  _hover: {
    bg: "inherit",
  },
});

const ghost = defineStyle({
  ":focus-visible, :hover, :focus": {
    background: "inherit",
  },
});

const toggledGhost = defineStyle({
  ...toggleBg,
  _hover: {
    bg: "inherit",
  },
});

const matchResultButton = defineStyle({
  border: "none",
  bg: "transparent",
  padding: 0,
  height: "100%",
  borderRadius: "4px",
});

const constSquareToggle = defineStyle({
  ...ghost,
  justifyContent: "flex",
  alignItems: "center",
  borderRadius: "4px",
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {
    variant: "solid",
  },
  sizes: {
    // Default size for button
    md: {
      height: 12,
      py: 1,
      px: 4,
    },
    sm: {
      fontSize: "0.75rem",
      height: 8,
      py: 1.5,
      pr: 3,
      pl: 3.5,
    },
    matchBtnSize: {
      w: "36px",
      minW: "36px",
    },
    mdIconSquare: {
      fontSize: "1.5rem",
      h: 12,
      minW: 12,
      py: 1,
      pl: 2.5,
      pr: 1.5,
      gap: 0,
    },
  },
  variants: {
    solid,
    outline: defineStyle(outline),
    outlineToggled,
    ghost,
    toggledGhost,
    constSquareToggle,
    matchResultButton,
  },
});
