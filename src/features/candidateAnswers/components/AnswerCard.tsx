import { useTranslation } from "react-i18next";
import { Question } from "@data/types";
import { RadioAnswer } from "./RadioAnswer";
import { YesOrNoAnswer } from "./YesOrNoAnswer";
import { CandidateAnswer } from "@data/candidateAnswers";
import { CommentCard } from "./CommentCard";
import { useLocalizedString } from "@hooks/useLocalizedString";
import { getAnswerByQuestionId } from "@stores/answerStore";
import { Badge, Card, CardProps, Flex, Heading } from "@chakra-ui/react";

interface IAnswerCardProps {
  question: Question;
  candidateAnswer: CandidateAnswer;
  questionsCount: number;
  candidateImgSrc: string;
}

export const AnswerCard = (props: IAnswerCardProps & CardProps) => {
  const {
    candidateAnswer,
    question,
    questionsCount,
    candidateImgSrc,
    ...rest
  } = props;
  const { t } = useTranslation();
  const { localize } = useLocalizedString();
  const questionId = question.id;

  const candidateComment = candidateAnswer?.comment
    ? localize(candidateAnswer.comment)
    : undefined;

  const userAnswer = getAnswerByQuestionId(question.id);

  return (
    <Card as="section" {...rest} variant="bigCentered">
      <Flex justifyContent="center" align="center" gap={6} w="100%">
        <Badge variant="negative">{`${question.position}/${questionsCount}`}</Badge>
      </Flex>
      <Heading as="h2" variant="question" my={5}>
        {question.question.en}
      </Heading>
      {question.questionType === "yes-no" ? (
        <YesOrNoAnswer
          questionId={questionId}
          t={t}
          candidateAnswer={candidateAnswer?.answer ?? null}
          userAnswer={userAnswer?.answer ?? null}
          candidateImgSrc={candidateImgSrc}
        />
      ) : (
        <RadioAnswer
          t={t}
          candidateAnswer={candidateAnswer?.answer ?? null}
          userAnswer={userAnswer?.answer ?? null}
          candidateImgSrc={candidateImgSrc}
        />
      )}
      {candidateComment && (
        <CommentCard
          header={"Candidate name"} // TODO: Pass candidate's name
          body={candidateComment}
          questionType={question.questionType}
          answer={candidateAnswer?.answer}
        />
      )}
    </Card>
  );
};
