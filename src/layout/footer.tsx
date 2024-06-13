import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { TFunction } from "i18next";

export const AppFooter = ({ t }: { t: TFunction }) => {
  return (
    <Flex as="footer" py="21px" px="0">
      <Flex
        align="center"
        justifyContent="center"
        w="100%"
        fontSize="sm"
        py={1}
        px={4}
        sx={{
          a: { py: 3, px: 6, fontWeight: 700 },
        }}
      >
        <Link to="/">{t("footer.frontPageLink")}</Link>
        <a href="https://vaalit.yle.fi/vaalikone/presidentinvaali2024">
          Ylen vaalikone presidentivaaleissa 2024
        </a>
        {/* TODO: Link to source code */}
      </Flex>
      {/* TODO: Language menu */}
    </Flex>
  );
};
