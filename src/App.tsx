import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Toolbar } from "./components/Toolbar";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { QuestionCard } from "./components/QuestionCard";

export const Homepage = () => {
  return <div>Homepage</div>;
};

export const QuestionsPage = () => {
  return <div>Questions Page</div>;
};

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Toolbar />
      <main>
        <section>
          <Heading as="h1">{t("frontPage.title")}</Heading>
          <Text textStyle="body">{t("frontPage.subtitle")}</Text>
          <Button rightIcon={<FiChevronRight />}>{t("frontPage.start")}</Button>
        </section>
        <Flex
          as="article"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          gap="1.5rem"
          py="1.5rem"
        >
          <QuestionCard
            title="Sample question title"
            category={""}
            number={0}
          />
          <QuestionCard
            title="Another example question title, but longer"
            category={""}
            number={1}
          />
        </Flex>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
