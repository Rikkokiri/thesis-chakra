import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { brand } from "./colors";

/**
 * Customizing global styles:
 * https://v2.chakra-ui.com/docs/styled-system/customize-theme#customizing-global-styles
 */
export const styles = {
  global: (props: StyleFunctionProps) => ({
    /**
     * Way to define color mode aware global variables.
     * Found in a Github issue comment (from user keithburgie-rts):
     * https://github.com/chakra-ui/chakra-ui/issues/1162#issuecomment-963620496
     */
    ":root": {
      "--focus-outline-color": mode(brand.blueBlack, brand.gray5)(props),
      "--primary": mode(brand.blueBlack, brand.gray5)(props),
      "--toolbar-shadow": `${brand.black15} 0 0 7px 0`,
      /* Component sizing */
      "--match-bar-height": "76px",
      "--toolbar-height": "72px",
      "--toolbar-max-width": "1080px",
      "--radio-range-max-width": "343px",
      "--card-max-width": "680px",
      "--question-max-width": "343px",
      "--comment-max-width": "343px",
      "--modal-max-width": "343px",
      "--modal-min-width": "300px",
      "--modal-max-height": "550px",
      "--modal-min-height": "120px",
    },
    body: {
      fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      bg: mode(brand.gray10, brand.black)(props),
      color: mode(brand.blueBlack, brand.gray5)(props),
      lineHeight: 1.5,
    },
    // Tis applies to all footer elements in the app
    footer: {
      bg: mode(brand.gray5, brand.gray90)(props),
    },
    a: {
      textDecoration: "underline",
    },
  }),
};
