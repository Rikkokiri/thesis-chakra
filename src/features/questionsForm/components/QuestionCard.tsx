import { useTranslation } from "react-i18next";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ToggleButton } from "../../../components/ToggleButton/ToggleButton";
import { FiEyeOff } from "react-icons/fi";
import { Category, Question } from "@data/types";
import { Answer } from "@stores/answerStore";
import { RadioQuestion } from "./RadioQuestion";
import { YesNoQuestion } from "./YesNoQuestion";
import { AdditionalInfo } from "./AdditionalInfo";

interface ICardProps {
  category: Category;
  question: Question;
  answer: Answer | undefined;
  questionsCount: number;
  answerQuestion: (questionId: number, answer: number) => void;
  toggleQuestionHiding: (questionId: number) => void;
}

export const QuestionCard = (props: ICardProps) => {
  const {
    answer,
    question,
    category,
    questionsCount,
    answerQuestion,
    toggleQuestionHiding,
  } = props;
  const { t } = useTranslation();
  const questionId = question.id;
  const questionNumber = category.position + question.position + 1;

  return (
    <Card size="lg" mb="1.5rem" py="5rem" variant="bigCentered">
      <CardHeader>
        <Badge>{`${questionNumber}/${questionsCount}`}</Badge>
        <Text textStyle="label">{category.name.en}</Text>
      </CardHeader>
      <CardBody>
        <Heading as="h2" variant="question">
          {question.question.en}
        </Heading>
        <Flex alignItems="center" justifyContent="center" mt="1.625rem">
          {question.additionalInfo && (
            <AdditionalInfo t={t} info={question.additionalInfo} />
          )}
          <ToggleButton
            onClick={() => toggleQuestionHiding(question.id)}
            isToggled={!!answer?.hideQuestion}
            untoggledIcon={<FiEyeOff size="1.25rem" />}
            toggledIcon={<FiEyeOff size="1.25rem" />}
            variant="ghost"
            toggledVariant="toggledGhost"
            size="sm"
          >
            {t("question.hide")}
          </ToggleButton>
        </Flex>
      </CardBody>
      <CardFooter>
        {question.questionType === "yes-no" ? (
          <YesNoQuestion
            answerQuestion={answerQuestion}
            questionId={questionId}
            t={t}
            answer={answer?.answer ?? null}
          />
        ) : (
          <RadioQuestion
            questionId={questionId}
            answerQuestion={answerQuestion}
            t={t}
            value={answer?.answer ?? null}
          />
        )}
      </CardFooter>
    </Card>
  );
};
