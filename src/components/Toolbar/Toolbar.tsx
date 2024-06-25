import { useTranslation } from "react-i18next";
import { Link as ReactRouterLink } from "react-router-dom";
import { Route } from "src/routes";
import { Flex, chakra, useColorModeValue, Square } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { RowCentered } from "@/layout";

export const Toolbar = () => {
  const { t } = useTranslation();
  const bg = useColorModeValue("brand.white", "brand.blueBlack");

  return (
    <chakra.header
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bg}
      px={6}
      h="var(--toolbar-height)"
      boxShadow="rgba(0, 0, 0, 15%) 0 0 7px 0"
      position="relative"
      zIndex={1}
    >
      <RowCentered
        as="nav"
        maxW="var(--toolbar-max-width)"
        justifyContent="flex-start"
        fontWeight={700}
      >
        <Flex gap={6} align="center">
          <Square size="2.5rem" borderRadius="2px" bg="brand.yleLogo"></Square>
          <ChakraLink
            to={Route.ROOT}
            as={ReactRouterLink}
            variant="noUnderline"
          >
            {t("navigation.frontPage")}
          </ChakraLink>
        </Flex>
      </RowCentered>
    </chakra.header>
  );
};
