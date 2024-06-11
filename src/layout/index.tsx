import { chakra, Flex, FlexProps } from "@chakra-ui/react";

export const RowCentered = chakra(Flex, {
  baseStyle: {
    flexDir: "row",
    justifyContent: "center",
    alignItems: "center",
    w: "100%",
  },
});

export const ColumnCentered = (props: FlexProps) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      {...props}
    />
  );
};

export const PageSectionsCol = chakra(Flex, {
  baseStyle: {
    flexDir: "column",
    w: "100%",
    maxWidth: "680px",
    gap: 6,
  },
});
