import { defineStyleConfig } from "@chakra-ui/react";

export const badgeTheme = defineStyleConfig({
  baseStyle: {
    background: "brand.black",
    color: "white",
    fontWeight: 700,
    height: "1.5rem",
    display: "flex",
    minWidth: "2.625rem",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.25rem",
  },
});
