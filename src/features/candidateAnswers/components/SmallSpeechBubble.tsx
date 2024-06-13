import { ReactNode } from "react";
import { QuestionType } from "@data/types";
import { doesAgree } from "@data/data-utils";
import {
  Box,
  Flex,
  FlexProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface ISpeechBubbleProps {
  content: ReactNode;
  answer: number;
  questionType: QuestionType;
}

export const SmallSpeechBubble = ({
  content,
  answer,
  questionType,
  ...props
}: ISpeechBubbleProps & FlexProps) => {
  const agreeingAnswer = doesAgree(answer, questionType);
  const textColor = useColorModeValue("brand.gray5", "brand.blueBlack");

  return (
    <Flex
      bg={agreeingAnswer ? "agree" : "disagree"}
      p={2}
      borderRadius="4px"
      position="relative"
      alignItems="center"
      justifyContent="center"
      mb="10px"
      {...props}
    >
      <Box
        position="absolute"
        bg="inherit"
        h="10px"
        w="10px"
        top="100%"
        clipPath="polygon(0 0, 50% 100%, 100% 0)"
      />
      <Text textStyle="bodySmBold" color={textColor}>
        {content}
      </Text>
    </Flex>
  );
};
