import { Flex, FlexProps } from "@chakra-ui/react";

export const RowCentered = (props: FlexProps) => {
  return (
    <Flex alignItems="center" justifyContent="center" w="100%" {...props} />
  );
};
