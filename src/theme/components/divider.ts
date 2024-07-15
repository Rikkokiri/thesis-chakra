import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: 10,
  borderColor: "brand.gray30",
  _dark: {
    borderColor: "brand.gray60",
  },
});

export const dividerTheme = defineStyleConfig({
  baseStyle,
});
