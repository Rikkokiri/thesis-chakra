import { useTranslation } from "react-i18next";
import "./Toolbar.css";
import { Link } from "react-router-dom";
import { Route } from "src/routes";
import { chakra, useColorModeValue } from "@chakra-ui/react";

export const Toolbar = () => {
  const { t } = useTranslation();
  const bg = useColorModeValue("brand.white", "brand.blueBlack");

  return (
    <chakra.header className="toolbar" bg={bg}>
      <nav className="toolbar__nav">
        <div className="toolbar__logo-wrapper">
          <div className="toolbar__logo"></div>
          <Link to={Route.ROOT}>{t("navigation.frontPage")}</Link>
        </div>
      </nav>
    </chakra.header>
  );
};
