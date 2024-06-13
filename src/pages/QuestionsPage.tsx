import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FiArrowDown } from "react-icons/fi";
import { QuestionForm } from "../features/questionsForm";
import { CandidatesMatch } from "src/features/candidatesMatch";
import { getQuestionsTotalCount } from "@data/api";
import { useRef } from "react";
import { ColumnCentered } from "../layout";

export const QuestionsPage = () => {
  const { t } = useTranslation();
  const questionsTotalCount = getQuestionsTotalCount();
  const { ref, inView } = useInView({
    threshold: (1 / questionsTotalCount) * 1.5, // Reveal when half of second card is in view
  });
  const questionsStartRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {inView && <CandidatesMatch />}
      <ColumnCentered as="section" py={8} bg="primaryBg" textAlign="center">
        <Text textStyle="subtitle">{t("electionName")}</Text>
        <Heading as="h1" size="3xl">
          {t("questionPage.findYourCandidate")}
        </Heading>
        <Text m="1rem" mb="2rem" maxWidth="680px">
          {t("questionPage.description")}
        </Text>
        <Button
          leftIcon={<FiArrowDown size="1.25rem" />}
          onClick={() => {
            questionsStartRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {t("questionPage.findYourCandidate")}
        </Button>
        <Box ref={questionsStartRef} />
      </ColumnCentered>
      <Flex direction="column" pt={6} align="center" ref={ref} w="100%">
        <QuestionForm />
      </Flex>
    </>
  );
};
