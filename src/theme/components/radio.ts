import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, keyframes } from "@chakra-ui/react";
import { brand } from "../colors";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const scaleOption = keyframes`
    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.5);
    }
`;

const radioBg = {
  backgroundColor: brand.gray30,
  _dark: {
    bg: brand.gray60,
  },
};

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    display: "flex",
    flexDirection: "column",
    placeItems: "center start",
    width: "2rem",
    textAlign: "inherit",
  },
  label: {
    // fontSize: "12px", // Font-size had to be applied through sizes instead of baseStyle
    m: 0,
    mt: "0.75rem",
  },
  control: {
    height: "2rem",
    width: "2rem",
    ...radioBg,
    border: "none",
    _hover: {
      ...radioBg,
    },
    _checked: {
      backgroundColor: brand.gray30,
      borderWidth: "0.25rem",
      "::before": {
        height: "1.5rem",
        width: "1.5rem",
        backgroundColor: brand.blueBlack,
      },
      animation: `${scaleOption} 0.3s ease 0s 1`,
      _hover: {
        ...radioBg,
      },
      _readOnly: {
        animation: "none",
      },
    },
  },
});

const agree = definePartsStyle({
  control: {
    _checked: {
      "::before": {
        backgroundColor: brand.success,
        _dark: {
          backgroundColor: brand.greenBright,
        },
      },
    },
  },
});

const disagree = definePartsStyle({
  control: {
    _checked: {
      "::before": {
        backgroundColor: brand.error,
        _dark: {
          backgroundColor: brand.liveRed,
        },
      },
    },
  },
});

export const radioTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    agree,
    disagree,
  },
  sizes: {
    md: {
      // "md" is the default size for <Radio />
      label: {
        fontSize: "0.75rem",
      },
    },
  },
});
