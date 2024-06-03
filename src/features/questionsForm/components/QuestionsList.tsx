import { chakra } from "@chakra-ui/react";
import { QuestionCard } from "./QuestionCard";
import { IQuestionsForm } from "../hooks/useQuestionsForm";
import { Question } from "src/data/types";

export const QuestionsList = (props: IQuestionsForm) => {
  const { categoriesAndQuestions, questionsTotalCount, answers } = props;

  return (
    <chakra.section w="100%">
      {categoriesAndQuestions.map((category) => (
        <article key={category.id} className="question-page__category-section">
          {category.questions.map((question: Question) => (
            <QuestionCard
              key={question.id}
              category={category}
              question={question}
              answer={answers[question.id]}
              questionsCount={questionsTotalCount}
              answerQuestion={props.answerQuestion}
              toggleQuestionHiding={props.toggleQuestionHiding}
            />
          ))}
        </article>
      ))}
      {/* TODO: Link to results page */}
    </chakra.section>
  );
};
