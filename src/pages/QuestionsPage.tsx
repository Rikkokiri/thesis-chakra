import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Button, Heading } from "@chakra-ui/react";
import "./QuestionsPage.css";
import { FiArrowDown } from "react-icons/fi";
import { QuestionForm } from "../features/questionsForm";
import { CandidatesMatch } from "src/features/candidatesMatch";
import { getQuestionsTotalCount } from "@data/api";
import { useRef } from "react";

export const QuestionsPage = () => {
  const { t } = useTranslation();
  const questionsTotalCount = getQuestionsTotalCount();
  // TODO: Chakra-UI - Fix revealing of CandidatesMatch component on scroll
  const { ref /*, inView */ } = useInView({
    threshold: (1 / questionsTotalCount) * 1.5, // Reveal when half of second card is in view
  });
  const questionsStartRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {/* inView && <CandidatesMatch />*/}
      <CandidatesMatch />
      <section className="question-page__header">
        <p className="subtitle m-0">{t("electionName")}</p>
        <Heading as="h1" size="3xl" /* className="heading-1 pageheader_title"*/>
          {t("questionPage.findYourCandidate")}
        </Heading>
        <p className="page-intro">{t("questionPage.description")}</p>

        <Button
          leftIcon={<FiArrowDown />}
          onClick={() => {
            questionsStartRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {t("questionPage.findYourCandidate")}
        </Button>
        <div ref={questionsStartRef} />
      </section>
      <div className="question-page__content" ref={ref}>
        <QuestionForm />
      </div>
    </>
  );
};
