import { useCandidateAnswers } from "../hooks/useCandidateAnswers";
import { AnswerCard } from "./AnswerCard";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { RowCentered } from "@/layout";
import { Divider, chakra, useBoolean } from "@chakra-ui/react";

export const AnswerList = (props: ReturnType<typeof useCandidateAnswers>) => {
  const { t, questions, candidateAnswers, candidateImgSrc } = props;
  const [isExpanded, setExpanded] = useBoolean(false);
  const questionsToShow = isExpanded ? questions : [questions[0]];

  return (
    <chakra.article
      className="answer-list"
      sx={{
        ".answer-card": {
          borderBottom: "1px solid",
          borderBottomColor: "bodyBg",
        },
        ".answer-card:last-of-type": {
          borderBottom: "none",
        },
      }}
    >
      <SectionCard title={t("candidateSections.answers")} bodyPadding="0">
        <>
          {questionsToShow.map((question) => (
            <AnswerCard
              className="answer-card"
              key={question.id}
              question={question}
              candidateAnswer={
                candidateAnswers[question.id] ?? { answer: null }
              }
              questionsCount={questions.length}
              candidateImgSrc={candidateImgSrc}
            />
          ))}
        </>
        <Divider mx="auto" maxW={"calc(100% - 2 * 24px)"} />
        <RowCentered p={6}>
          <ToggleButton
            isToggled={isExpanded}
            onClick={setExpanded.toggle}
            toggledIcon={<FiMinus size="1.5rem" />}
            untoggledIcon={<FiPlus size="1.5rem" />}
            toggledVariant="outline"
          >
            {isExpanded ? t("showFewer") : t("showMore")}
          </ToggleButton>
        </RowCentered>
      </SectionCard>
    </chakra.article>
  );
};
