import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

/**
 * Customizing global styles:
 * https://v2.chakra-ui.com/docs/styled-system/customize-theme#customizing-global-styles
 */
export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("brand.gray10", "brand.black")(props),
      color: mode("brand.blueBlack", "brand.gray5")(props),
    },
    /* header: {
      bg: mode("brand.white", "brand.blueBlack")(props),
    }, */
  }),
};
