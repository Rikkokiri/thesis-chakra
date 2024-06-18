import { QuestionType } from "@data/types";
import { SmallSpeechBubble } from "./SmallSpeechBubble";
import { useTranslation } from "react-i18next";
import { CandidateIndicator } from "./CandidateIndicator";
import { Box, Flex, Radio } from "@chakra-ui/react";
import { radioGroupStyles } from "@/components/RadioRange/RadioRange";

interface IDisplayRadioOption {
  value: number;
  label: string;
  isChecked?: boolean;
  optionVariant?: string;
  indicatorClassName?: string;
  indicatorImgSrc?: string;
}

interface IDisplayRadioRangeProps {
  options: IDisplayRadioOption[];
  userAnswer: number | null;
  candidateAnswer: number | null;
  isReadonly?: boolean;
}

export const DisplayRadioRange = (props: IDisplayRadioRangeProps) => {
  const { t } = useTranslation();
  const { userAnswer, candidateAnswer } = props;

  return (
    <Flex
      position="relative"
      mt={userAnswer !== null ? "70px" : "inherit"}
      sx={radioGroupStyles}
    >
      {props.options.map((option) => {
        return (
          <Flex
            key={`radio-option-${option.value}`}
            position="relative"
            width="2rem"
            dir="column"
            alignItems="center"
            justifyItems="start"
            textAlign="center"
          >
            <Radio
              type="radio"
              name="radio-option"
              value={option.value.toString()}
              isChecked={option.isChecked}
              isReadOnly
              variant={option.optionVariant}
              sx={{ cursor: "not-allowed" }}
            >
              {option.label}
            </Radio>
            {option.isChecked && candidateAnswer === option.value && (
              <Box
                sx={{
                  position: "absolute",
                  top: "0.25rem",
                  left: "0.25rem",
                  height: "1.5rem",
                  width: "1.5rem",
                  borderRadius: "50%",
                  ...(candidateAnswer === userAnswer && {
                    clipPath:
                      "polygon(-1px -1px, 50% -1px, 50% 100%, -1px 100%)",
                  }),
                  cursor: "not-allowed",
                }}
              >
                <CandidateIndicator
                  imgSrc={option.indicatorImgSrc ?? ""}
                  alt={""} // TODO: Meaningful alt text
                />
              </Box>
            )}
            {userAnswer === option.value && (
              <SmallSpeechBubble
                content={t("question.yourAnswer")}
                answer={userAnswer}
                questionType={QuestionType.AGREE_SCALE}
                sx={{
                  justifySelf: "flex-start",
                  bottom: "calc(100% + 10px)",
                  alignSelf: "center",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};
