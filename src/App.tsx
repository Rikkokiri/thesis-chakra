import { Outlet } from "react-router-dom";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { useTranslation } from "react-i18next";
import { AppFooter } from "./layout/footer";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

function App() {
  const { t } = useTranslation();

  useDocumentTitle(t("pageTitle.default", { library: t("libraryName") }));

  return (
    <>
      <Toolbar />
      <div id="main-wrapper">
        <main id="app-main">
          <Outlet />
        </main>
        <AppFooter t={t} />
      </div>
    </>
  );
}

export default App;
