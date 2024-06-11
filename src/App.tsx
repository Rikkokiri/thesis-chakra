import { Outlet } from "react-router-dom";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { useDetectTheme } from "@hooks/useDetectTheme";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppFooter } from "./layout/footer";

function App() {
  const { prefersDarkMode, setActiveTheme } = useDetectTheme();
  const { t } = useTranslation();

  useEffect(() => {
    setActiveTheme(prefersDarkMode);
  }, [prefersDarkMode, setActiveTheme]);

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
