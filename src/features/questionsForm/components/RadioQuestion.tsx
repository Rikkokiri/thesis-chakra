import { RadioRange } from "@components/RadioRange/RadioRange";
import { TFunction } from "i18next";
import { RowCentered } from "@/layout";

interface IRadioQuestionProps {
  t: TFunction;
  value: number | null;
  questionId: number;
  answerQuestion: (questionId: number, answer: number) => void;
}

export const RadioQuestion = (props: IRadioQuestionProps) => {
  const { t, value, questionId, answerQuestion } = props;

  return (
    <RowCentered pt={2}>
      <RadioRange
        options={[
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
        ]}
        value={value?.toString() ?? undefined}
        onChange={(value) => answerQuestion(questionId, parseInt(value, 10))}
      />
    </RowCentered>
  );
};
