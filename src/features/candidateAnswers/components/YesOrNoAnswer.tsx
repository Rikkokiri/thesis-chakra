import { TFunction } from "i18next";
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbDownLine } from "react-icons/ri";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { YesNoAnswer, QuestionType } from "@data/types";
import { SmallSpeechBubble } from "./SmallSpeechBubble";
import { CandidateIndicator } from "./CandidateIndicator";
import { RowCentered } from "@/layout";
import { Flex } from "@chakra-ui/react";

interface IYesNoAnswerProps {
  t: TFunction;
  questionId: number;
  candidateAnswer: number | null;
  userAnswer: number | null;
  candidateImgSrc: string;
}

type AnswerOption = {
  value: YesNoAnswer;
  label: string;
};

export const YesOrNoAnswer = (props: IYesNoAnswerProps) => {
  const { t, userAnswer, candidateAnswer, candidateImgSrc } = props;
  const options: AnswerOption[] = [
    {
      value: YesNoAnswer.YES,
      label: t("question.yes"),
    },
    {
      value: YesNoAnswer.NO,
      label: t("question.no"),
    },
  ];

  return (
    <RowCentered
      alignItems="flex-end"
      gap={6}
      position="relative"
      sx={{
        ":has(.user-answer-bubble)": {
          mt: "50px",
          mb: "10px",
        },
      }}
    >
      {options.map((option) => {
        const isToggled = candidateAnswer === option.value;

        return (
          <Flex direction="column" key={option.value}>
            <ToggleButton
              mt={2}
              isDisabled
              variant="outline"
              isToggled={isToggled}
              toggledIcon={
                <CandidateIndicator
                  alt={""} // TODO: Pass a meaningful alt text
                  imgSrc={candidateImgSrc}
                />
              }
              untoggledIcon={
                option.value === YesNoAnswer.YES ? (
                  <RiThumbUpLine size="1.25rem" />
                ) : (
                  <RiThumbDownLine size="1.25rem" />
                )
              }
            >
              {option.label}
            </ToggleButton>
            {userAnswer === option.value && (
              <SmallSpeechBubble
                position="absolute"
                bottom="calc(100% + 10px)"
                content={t("question.yourAnswer")}
                answer={userAnswer}
                questionType={QuestionType.YES_NO}
                className="user-answer-bubble"
              />
            )}
          </Flex>
        );
      })}
    </RowCentered>
  );
};
