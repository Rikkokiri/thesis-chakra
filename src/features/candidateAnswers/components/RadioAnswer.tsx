import { Flex } from "@chakra-ui/react";
import { DisplayRadioRange } from "./DisplayRadioRange";
import { TFunction } from "i18next";

interface IRadioAnswerProps {
  t: TFunction;
  candidateAnswer: number | null;
  userAnswer: number | null;
  candidateImgSrc: string;
}

export const RadioAnswer = (props: IRadioAnswerProps) => {
  const { t, candidateAnswer, userAnswer, candidateImgSrc } = props;

  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      w="100%"
      pt="2"
    >
      <DisplayRadioRange
        options={buildOptions(t, candidateAnswer, userAnswer, candidateImgSrc)}
        candidateAnswer={candidateAnswer}
        userAnswer={userAnswer}
        isReadonly
      />
    </Flex>
  );
};

const buildOptions = (
  t: TFunction,
  candidateAnswer: number | null,
  userAnswer: number | null,
  candidateImgSrc: string,
) => {
  const options = [
    {
      value: 1,
      label: t("answerScale.strongDisagree"),
      optionVariant: "disagree",
    },
    {
      value: 2,
      label: t("answerScale.disagree"),
      optionVariant: "disagree",
    },
    { value: 4, label: t("answerScale.agree"), optionVariant: "agree" },
    {
      value: 5,
      label: t("answerScale.strongAgree"),
      optionVariant: "agree",
    },
  ];

  return options.map((option) => {
    const isCandidateAnswer = candidateAnswer === option.value;
    const isUserAnswer = userAnswer === option.value;

    return {
      ...option,
      isChecked: isUserAnswer || isCandidateAnswer,
      indicatorClassName: `${isCandidateAnswer ? "candidate-answer" : ""} ${isUserAnswer ? "user-answer" : ""}`,
      indicatorImgSrc: isCandidateAnswer ? candidateImgSrc : undefined,
    };
  });
};
