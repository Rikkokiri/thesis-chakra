import { TFunction } from "i18next";
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbUpFill } from "react-icons/ri";
import { RiThumbDownLine } from "react-icons/ri";
import { RiThumbDownFill } from "react-icons/ri";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { YesNoAnswer } from "@data/types";
import { RowCentered } from "@/layout";

interface IYesNoQuestionProps {
  t: TFunction;
  questionId: number;
  answerQuestion: (questionId: number, answer: number) => void;
  answer: number | null;
}

export const YesNoQuestion = (props: IYesNoQuestionProps) => {
  const { answer, answerQuestion, questionId, t } = props;

  return (
    <RowCentered gap={6} mt={10}>
      <ToggleButton
        isToggled={answer === YesNoAnswer.YES}
        onClick={() => answerQuestion(questionId, YesNoAnswer.YES)}
        untoggledIcon={<RiThumbUpLine size="1.25rem" />}
        toggledIcon={<RiThumbUpFill size="1.25rem" />}
      >
        {t("question.yes")}
      </ToggleButton>
      <ToggleButton
        isToggled={answer === YesNoAnswer.NO}
        onClick={() => answerQuestion(questionId, YesNoAnswer.NO)}
        untoggledIcon={<RiThumbDownLine size="1.25rem" />}
        toggledIcon={<RiThumbDownFill size="1.25rem" />}
      >
        {t("question.no")}
      </ToggleButton>
    </RowCentered>
  );
};
