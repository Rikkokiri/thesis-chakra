import { Button, Flex, Heading } from "@chakra-ui/react";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import { useAnswerStore } from "@stores/answerStore";
import { useTranslation } from "react-i18next";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Route } from "src/routes";

export const FrontPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { removeAllAnswers } = useAnswerStore();

  const startCompass = () => {
    removeAllAnswers();
    navigate(Route.QUESTIONS);
  };

  return (
    <>
      <div className="page-header">
        <Heading size="3xl" mb={4}>
          {t("frontPage.title")}
        </Heading>
        <Button leftIcon={<FiChevronRight />} onClick={startCompass}>
          {t("frontPage.start")}
        </Button>
      </div>
      <Flex direction="column" gap="6" maxW="680px" py="6">
        <SectionCard title={t("candidates")}>
          <div></div>
        </SectionCard>
      </Flex>
    </>
  );
};
