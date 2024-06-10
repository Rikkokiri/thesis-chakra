import { useCandidateInfo } from "../hooks/useCandidateInfo";
import { Flex, Heading, Text } from "@chakra-ui/react";

export const CandidateIntroHeader = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, candidate } = props;

  if (!candidate) {
    return null;
  }

  return (
    <Flex
      // TODO: background-color: var(--card-bg);
      direction="column"
      p={6}
      mb={12}
      textAlign="center"
      gap={4}
    >
      <div>
        <Text textStyle="subtitle">{t("electionName")}</Text>
        <Heading size="4xl">{candidate.name}</Heading>
      </div>
      {candidate.organization ||
        (candidate.creator && (
          <Text textStyle="label">
            {t("candidate.createdBy")}{" "}
            {candidate.organization || candidate.creator}
          </Text>
        ))}
      <Flex
        justifyContent="center"
        alignItems="center"
        my={4}
        mx="auto"
        textStyle="labelXL"
        borderRadius={"50%"}
        border="1px solid black" // TODO: Update color to primary
        h={"7.75rem"}
        w={"7.75rem"}
      >
        {t("candidate.number")} {candidate.number}
      </Flex>
    </Flex>
  );
};
