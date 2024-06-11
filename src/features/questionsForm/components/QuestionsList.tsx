import { chakra } from "@chakra-ui/react";
import { QuestionCard } from "./QuestionCard";
import { IQuestionsForm } from "../hooks/useQuestionsForm";
import { Question } from "src/data/types";
import { ColumnCentered } from "@/layout";

export const QuestionsList = (props: IQuestionsForm) => {
  const { categoriesAndQuestions, questionsTotalCount, answers } = props;

  return (
    <chakra.section w="100%" mx="auto">
      {categoriesAndQuestions.map((category) => (
        <ColumnCentered as="article" key={category.id}>
          {category.questions.map((question: Question) => (
            <QuestionCard
              // TODO: Chakra version - // w="100%"
              key={question.id}
              category={category}
              question={question}
              answer={answers[question.id]}
              questionsCount={questionsTotalCount}
              answerQuestion={props.answerQuestion}
              toggleQuestionHiding={props.toggleQuestionHiding}
            />
          ))}
        </ColumnCentered>
      ))}
      {/* TODO: Link to results page */}
    </chakra.section>
  );
};
