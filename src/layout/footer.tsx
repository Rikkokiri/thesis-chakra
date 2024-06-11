import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { TFunction } from "i18next";

export const AppFooter = ({ t }: { t: TFunction }) => {
  return (
    <Flex as="footer" /* id="app-footer"*/>
      <Flex
        py="21px"
        px="0"
        align="center"
        justifyContent="center"
        w="100%"
        fontSize="sm"
        sx={{
          a: { py: 3, px: 8, fontWeight: 700 },
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