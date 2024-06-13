import { ReactNode } from "react";
import { QuestionType, YesNoAnswer } from "@data/types";
import { Box, Card, CardBody, CardHeader } from "@chakra-ui/react";

interface ICommentCardProps {
  header: ReactNode;
  body: ReactNode;
  answer?: number;
  questionType: QuestionType;
}

export const CommentCard = (props: ICommentCardProps) => {
  const { header, body, answer, questionType } = props;

  return (
    <Card
      variant="comment"
      position="relative"
      mb={0}
      mx={2.5}
      mt={questionType === QuestionType.AGREE_SCALE ? 7 : 3}
    >
      <CommentCardArrow answer={answer} questionType={questionType} />
      <CardHeader>{header}</CardHeader>
      <CardBody>{body}</CardBody>
    </Card>
  );
};

const CommentCardArrow = ({
  answer,
  questionType,
}: Pick<ICommentCardProps, "answer" | "questionType">) => {
  const arrowPosition = (
    answer: number | undefined,
    questionType: QuestionType,
  ) => {
    if (answer === undefined) return 50;
    if (questionType === QuestionType.YES_NO) {
      return answer === YesNoAnswer.YES ? 33 : 63;
    }
    return (answer < 4 ? answer - 1 : answer - 2) * 30 + 3;
  };

  return (
    <Box
      className="comment-card__arrow"
      position="absolute"
      left={`${arrowPosition(answer, questionType)}%`}
      display={answer === undefined ? "none" : "inherit"}
      top="-6px"
      width={4}
      height={4}
      transform="rotate(45deg)"
      bg="inherit"
    />
  );
};
