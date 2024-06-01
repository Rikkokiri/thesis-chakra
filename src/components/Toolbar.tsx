import { useTranslation } from "react-i18next";

// Box shadow: 0 0 calc(0.4375 * 16px) 0 rgba(0, 0, 0, 0.15);

export const Toolbar = () => {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">{t("navigation.frontPage")}</a>
          </li>
          <li>
            <a href="#">{t("navigation.search")}</a>
          </li>
          <li>
            <span>{t("navigation.menu")}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
